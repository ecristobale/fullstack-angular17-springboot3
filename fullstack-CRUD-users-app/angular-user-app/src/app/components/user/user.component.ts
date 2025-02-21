import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  imports: [],
  templateUrl: './user.component.html'
})
export class UserComponent {

  @Input() users: User[] = [];

  @Output() idUserEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemoveUser(userId: number): void {
    const confirmRemove = confirm('Are you sure? User will be removed permanently.');
    if (confirmRemove) {
      this.idUserEventEmitter.emit(userId);
    }
  }
}
