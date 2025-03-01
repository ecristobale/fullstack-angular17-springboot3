import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { SharingDataService } from '../../services/sharing-data.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { add } from '../../store/users.actions';

@Component({
  selector: 'user-form',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  user: User;
  errors: any = {};

  constructor(
    private store: Store<{users: any}>,
    private route: ActivatedRoute,
    private service: UserService,
    private sharingData: SharingDataService) {
    this.user = new User();

    this.store.select('users').subscribe(state => {
      this.errors = state.errors;
      this.user = { ... state.user };
    });
  }

  ngOnInit(): void {
    // this.sharingData.selectUserEventEmitter.subscribe(user => this.user = user);
    // this.sharingData.errorsUserFormEventEmitter.subscribe(errors => this.errors = errors);

    this.route.paramMap.subscribe(params => {
      const userId: number = +(params.get('userId') || '0');

      if (userId > 0) {
        // this.sharingData.findUserByIdEventEmitter.emit(userId);
        this.service.findById(userId).subscribe(user => this.user = user);
      }
    });
  }

  onSubmit(userForm: NgForm): void {
    this.store.dispatch(add({ userNew: this.user }));
  }

  onClear(userForm: NgForm): void {
    // this.user = new User();
    userForm.reset();
    // userForm.resetForm();
  }
}
