import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'user',
  imports: [RouterModule],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  title: string = 'User list';

  users: User[] = [];

  constructor(
      private sharingData: SharingDataService,
      private service: UserService,
      private router: Router) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);
  }

  onRemoveUser(userId: number): void {
    // const confirmRemove = confirm('Are you sure? User will be removed permanently.');
    // if (confirmRemove) {
      this.sharingData.idUserEventEmitter.emit(userId);
    // }
  }

  onSelectedUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }
}
