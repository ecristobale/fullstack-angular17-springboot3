import { Component, EventEmitter} from '@angular/core';
import { CartItem } from '../../models/cartItem';

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

  onDeleteProductOnCart(productId: number) {
    this.idProductEventEmitter.emit(productId);
  }
}
