import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { add, find, resetUser, setUserForm, update } from '../../store/users.actions';

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
    private route: ActivatedRoute) {
    this.user = new User();

    this.store.select('users').subscribe(state => {
      this.errors = state.errors;
      this.user = { ... state.user };
    });
  }

  ngOnInit(): void {
    this.store.dispatch(resetUser());
    this.route.paramMap.subscribe(params => {
      const userId: number = +(params.get('userId') || '0');

      if (userId > 0) {
        this.store.dispatch(find({ userId }));
      }
    });
  }

  onSubmit(userForm: NgForm): void {

    this.store.dispatch(setUserForm({ user: this.user}));
    if (this.user.id > 0) { // update
      this.store.dispatch(update({ userUpdated: this.user }));
    } else { // create
      this.store.dispatch(add({ userNew: this.user }));
    }
  }

  onClear(userForm: NgForm): void {
    this.store.dispatch(resetUser());
    userForm.reset();
    // userForm.resetForm();
  }
}
