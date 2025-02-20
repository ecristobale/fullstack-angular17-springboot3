import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-app',
  imports: [],
  templateUrl: './user-app.component.html'
})
export class UserAppComponent implements OnInit {

  title = 'User list';

  users: User[] = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe( users => this.users = users );
  }
}
