import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharingDataService } from '../services/sharing-data.service';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'user-app',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit {

  users: User[] = [];
  paginator: any = {};

  constructor(
    private router: Router,
    private service: UserService,
    private sharingData: SharingDataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.service.findAll().subscribe( users => this.users = users );
    this.addUser();
    this.deleteUser();
    this.findUserById();
    this.pageUsersEvent();
  }

  pageUsersEvent() {
    this.sharingData.pageUsersEventEmitter.subscribe(pageable => {
      this.users = pageable.users;
      this.paginator = pageable.paginator;
    });
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
        this.service.update(user).subscribe(
          {
            next: (userUpdated) => {
              this.users = this.users.map(u => (u.id === userUpdated.id )? ({... userUpdated}) : u);
              this.router.navigate(['/users'], {
                state: {paginator: this.paginator}
              });

              Swal.fire({
                title: "Updated!",
                text: "User was successfully updated!",
                icon: "success"
              });
            },
            error: (err) =>{
              // console.log(err.error);
              if (err == 400) {
                this.sharingData.errorsUserFormEventEmitter.emit(err.error);
              }
            }
          });
      } else {
        this.service.create(user).subscribe(
          {
            next: userCreated => {
              this.users = [... this.users, {... userCreated}];
              this.router.navigate(['/users'], {
                state: {paginator: this.paginator}
              });

              Swal.fire({
                title: "Created!",
                text: "User was successfully created!",
                icon: "success"
              });

            },
            error: (err) =>{
              // console.log(err.error);
              if (err == 400) {
                this.sharingData.errorsUserFormEventEmitter.emit(err.error);
              }
            }
          }
          )
      }
    });
  }

  deleteUser(): void {
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

          this.service.delete(userId).subscribe(() => {
            this.users = this.users.filter(user => user.id !== userId);
            // refresh of /users
            this.router.navigate(['/users/create'], {skipLocationChange: true}).then(()=> {
              this.router.navigate(['/users'], {
                state: {paginator: this.paginator}
              });
            });
          })
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
