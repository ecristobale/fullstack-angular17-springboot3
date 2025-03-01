import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { load, remove } from '../../store/users.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'user',
  imports: [RouterModule, PaginatorComponent, CommonModule],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  title: string = 'User list';

  users: User[] = [];

  paginator: any = {};

  constructor(
      private store: Store<{users: any}>,
      private sharingData: SharingDataService,
      private service: UserService,
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute) {

        this.store.select('users').subscribe(state => {
          this.users = state.users;
          this.paginator = state.paginator;
        });
      }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.store.dispatch(load({ page: +(params.get('page') || 0) }));
    });
  }

  onRemoveUser(userId: number): void {
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
        this.store.dispatch(remove({ userId }));
      }
    });
  }

  onSelectedUser(user: User): void {
    this.router.navigate(['/users/edit', user.id]);
  }

  get admin() {
    return this.authService.isAdmin();
  }
}
