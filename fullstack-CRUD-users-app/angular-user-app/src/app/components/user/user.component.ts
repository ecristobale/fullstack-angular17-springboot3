import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SharingDataService } from '../../services/sharing-data.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

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
      private sharingData: SharingDataService,
      private service: UserService,
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute) {
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.paginator = this.router.getCurrentNavigation()?.extras.state!['paginator'];
        }
      }

  ngOnInit(): void {
    // this.service.findAll().subscribe(users => this.users = users);
    const page = 0;
    this.service.findAllPageable(page).subscribe( pageable => {
      this.users = pageable.content as User[];
      this.paginator = pageable;
      this.sharingData.pageUsersEventEmitter.emit({users: this.users, paginator: this.paginator});
    });
    this.route.paramMap.subscribe(params => {
      const page = +(params.get('page') || 0);
      this.service.findAllPageable(page).subscribe( pageable => {
        this.users = pageable.content as User[];
        this.paginator = pageable;
        this.sharingData.pageUsersEventEmitter.emit({users: this.users, paginator: this.paginator});
        }
      );
    });
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

  get admin() {
    return this.authService.isAdmin();
  }
}
