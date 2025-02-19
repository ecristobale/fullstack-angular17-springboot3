import { Component, EventEmitter} from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  items: CartItem[] = [];

  total: number = 0;

  idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) {
    this.items = router.getCurrentNavigation()?.extras.state!['items'];
    this.total = router.getCurrentNavigation()?.extras.state!['total'];
  }

  onDeleteProductOnCart(productId: number) {
    this.idProductEventEmitter.emit(productId);
  }
}
