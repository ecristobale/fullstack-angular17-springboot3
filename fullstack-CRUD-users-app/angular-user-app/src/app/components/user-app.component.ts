import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'user-app',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit {

  users: User[] = [];

  constructor(
    private router: Router,
    private service: UserService,
    private sharingData: SharingDataService
  ) {
  }

  ngOnInit(): void {
    this.service.findAll().subscribe( users => this.users = users );
    this.addUser();
    this.removeUser();
    this.findUserById();
  }

  findUserById(): void {
    this.sharingData.findUserByIdEventEmitter.subscribe(userId => {

      const user = this.users.find(user => user.id === userId);
      this.sharingData.selectUserEventEmitter.emit(user);

    });
  }

  addUser(): void {
    this.sharingData.newUserEventEmitter.subscribe(user => {
      if (user.id > 0) {
        this.service.update(user).subscribe(userUpdated => {
          this.users = this.users.map(u => (u.id === userUpdated.id )? ({... userUpdated}) : u);
          this.router.navigate(['/users']);
        });
      } else {
        this.service.create(user).subscribe(userCreated => {
          this.users = [... this.users, {... userCreated}];
          this.router.navigate(['/users']);
        })
      }
      Swal.fire({
        title: "Saved!",
        text: "User was successfully saved!",
        icon: "success"
      });
    });
  }

  removeUser(): void {
    this.sharingData.idUserEventEmitter.subscribe(userId => {
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
          // refresh of /users
          this.router.navigate(['/users/create'], {skipLocationChange: true}).then(()=> {
            this.router.navigate(['/users'], { state: {users: this.users} });
          });
          Swal.fire({
            title: "Removed!",
            text: "User has been successfully removed.",
            icon: "success"
          });
        }
      });
    });
  }
}
