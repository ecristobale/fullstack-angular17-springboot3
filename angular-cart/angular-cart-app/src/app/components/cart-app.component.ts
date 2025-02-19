import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';
import Swal from 'sweetalert2';

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
    private sharingDataService: SharingDataService) {}

  ngOnInit(): void {
    // this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    // this.calculateTotal();
    this.onDeleteCart();
    this.onAddCart();
  }

  onAddCart(): void {
    this.sharingDataService.productEventEmitter.subscribe( product => {
      
      // this.calculateTotal();
      this.saveSession();
      this.router.navigate(['/cart'], {
        state: {items: this.items, total: this.total}
      });
      Swal.fire({
        title: 'Shopping Cart',
        text: 'New product added to the cart',
        icon: 'success'
      })
    });
  }

  onDeleteCart(): void {
    this.sharingDataService.idProductEventEmitter.subscribe( productId => {

      Swal.fire({
        title: "Are you sure?",
        text: "One unit of the item will be removed from Shopping Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          // this.calculateTotal();
          this.saveSession();
    
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/cart'], {state: {items: this.items, total: this.total}});
          });
          Swal.fire({
            title: "Deleted!",
            text: "Item has been removed from the Shopping Cart.",
            icon: "success"
          });
        }
      });
    });
  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }
}
