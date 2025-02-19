import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { ItemsState } from '../store/items.reducer';
import { add, remove, total } from '../store/items.actions';

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
    private store: Store<{items: ItemsState}>,
    private router: Router,
    private sharingDataService: SharingDataService) {
      this.store.select('items').subscribe(state => {
        this.items = state.items;
        this.total = state.total;
        this.saveSession();
        console.log('state changed');
      });
    }

  ngOnInit(): void {
    this.onDeleteCart();
    this.onAddCart();
  }

  onAddCart(): void {
    this.sharingDataService.productEventEmitter.subscribe( product => {
      
      this.store.dispatch(add({product: product}));
      this.store.dispatch(total());
      
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

          this.store.dispatch(remove({productId: productId}));
          this.store.dispatch(total());
    
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
