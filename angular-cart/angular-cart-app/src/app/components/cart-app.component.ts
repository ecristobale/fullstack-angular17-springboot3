import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CartItem } from '../models/cartItem';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './cart-app.component.html'
})
export class CartAppComponent implements OnInit {

  items: CartItem[] = [];

  total: number = 0;

  constructor(
    private router: Router,
    private sharingDataService: SharingDataService, 
    private service: ProductService) {}

  ngOnInit(): void {
    // this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.calculateTotal();
    this.onDeleteCart();
    this.onAddCart();
  }

  onAddCart(): void {
    this.sharingDataService.productEventEmitter.subscribe( product => {
      console.log('Event productEventEmitter executed, product.name: ' + product.name);
      // const hasItem = this.items.find(item => {
      //   return item.product.id === product.id;
      // });
      const hasItem = this.items.find(item => item.product.id === product.id);
      if(hasItem) {
        this.items = this.items.map(item => {
          if (item.product.id === product.id) {
            return {
              ... item, 
              quantity: ++item.quantity
            };
          }
          return item;
        });
      } else {
        this.items = [... this.items, {product: {... product}, quantity: 1}];
      }
      this.calculateTotal();
      this.saveSession();
      this.router.navigate(['/cart'], {
        state: {items: this.items, total: this.total}
      });
    });
  }

  onDeleteCart(): void {
    this.sharingDataService.idProductEventEmitter.subscribe( productId => {
      console.log('Event idProductEventEmitter executed, productId: ' + productId);
      const hasItem = this.items.find(item => item.product.id === productId && item.quantity > 1);
  
      if(hasItem) {
        this.items = this.items.map(item => {
          if (item.product.id === productId && item.quantity > 1) {
            return {
              ... item, 
              quantity: --item.quantity
            };
          }
          return item;
        });
      } else {
        this.items = this.items.filter(item => item.product.id !== productId);
      }
      this.calculateTotal();
      this.saveSession();

      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/cart'], {state: {items: this.items, total: this.total}});
      });
    });
  }

  calculateTotal(): void {
    this.total = this.items.reduce((accumulator, item) => accumulator + (item.quantity * item.product.price), 0);
  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
