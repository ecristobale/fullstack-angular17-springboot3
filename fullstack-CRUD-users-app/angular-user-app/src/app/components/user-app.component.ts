import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit {

  title = 'User list';

  users: User[] = [];

  userSelected: User;

  open: boolean = false;

  constructor(private service: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.service.findAll().subscribe( users => this.users = users );
  }

  addUser(user: User): void {
    if (user.id > 0) {
      this.users = this.users.map(u => (u.id === user.id )? ({... user}) : u);
    } else {
      this.users = [... this.users, {... user, id: new Date().getTime()}];
    }
    Swal.fire({
      title: "Saved!",
      text: "User was successfully saved!",
      icon: "success"
    });
    this.userSelected = new User();
    this.setOpen();
  }

  removeUser(userId: number): void {
    Swal.fire({
      title: "Are you sure?",
      text: "User will be removed from the system!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id !== userId);
        Swal.fire({
          title: "Removed!",
          text: "User has been successfully removed.",
          icon: "success"
        });
      }
    });
  }

  setSelectedUser(userRow: User): void {
    this.userSelected = {... userRow};
    this.open = true;
  }

  setOpen(): void {
    this.open = !this.open;
  }
}
