import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharingDataService } from '../services/sharing-data.service';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { add, find, findAll, remove, setPaginator, update } from '../store/users.actions';

@Component({
  selector: 'user-app',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent implements OnInit {

  users: User[] = [];
  paginator: any = {};
  user!: User;

  constructor(
    private store: Store<{users: any}>,
    private router: Router,
    private service: UserService,
    private sharingData: SharingDataService,
    private authService: AuthService,
  ) {
    this.store.select('users').subscribe(state => {
      this.users = state.users;
      this.paginator = state.paginator;
      this.user = {... state.user};
    })
  }

  ngOnInit(): void {
    this.addUser();
    this.deleteUser();
    this.findUserById();
    this.pageUsersEvent();
    this.handlerLogin();
  }

  handlerLogin() {
    this.sharingData.handlerLoginEventEmitter.subscribe(({username, password}) => {
      console.log(username + '  ' + password);

      this.authService.loginUser({username, password}).subscribe({
        next: response => {
          const token = response.token;
          console.log(token);
          const payload = this.authService.getPayload(token);

          const user = { username: payload.sub };
          const login = {
            user,
            isAuth: true,
            isAdmin: payload.isAdmin
          };
          this.authService.token = token;
          this.authService.user = login;
          this.router.navigate(['/users/page/0']);
        }, 
        error: error => {
          if (error.status == 401) {
            Swal.fire('Login error', error.error.message, 'error');
          } else {
            throw error;
          }
        }
      });
    });
  }

  pageUsersEvent() {
    this.sharingData.pageUsersEventEmitter.subscribe(pageable => {
      this.store.dispatch(findAll({users: pageable.users}));
      this.store.dispatch(setPaginator({paginator: pageable.paginator}));
    });
  }

  findUserById(): void {
    this.sharingData.findUserByIdEventEmitter.subscribe(userId => {
      this.store.dispatch(find({ userId }));
      this.sharingData.selectUserEventEmitter.emit(this.user);

    });
  }

  addUser(): void {
    this.sharingData.newUserEventEmitter.subscribe(user => {
      if (user.id > 0) {
        this.service.update(user).subscribe(
          {
            next: (userUpdated) => {
              this.store.dispatch(update({userUpdated}));
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
              this.store.dispatch(add({ userNew: userCreated }));
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
            this.store.dispatch(remove({ userId }));
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
