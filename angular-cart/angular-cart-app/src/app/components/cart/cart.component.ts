import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  @Input() items: CartItem[] = [];

  @Output() idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  onDeleteProductOnCart(productId: number) {
    this.idProductEventEmitter.emit(productId);
  }
}
