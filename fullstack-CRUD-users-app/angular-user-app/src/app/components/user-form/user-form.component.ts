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

@Component({
  selector: 'user-form',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  user: User;
  errors: any = {};

  constructor(private route: ActivatedRoute,
              private service: UserService,
              private sharingData: SharingDataService) {
    this.user = new User();
  }

  ngOnInit(): void {
    // this.sharingData.selectUserEventEmitter.subscribe(user => this.user = user);
    this.sharingData.errorsUserFormEventEmitter.subscribe(errors => this.errors = errors);

    this.route.paramMap.subscribe(params => {
      const userId: number = +(params.get('userId') || '0');

      if (userId > 0) {
        // this.sharingData.findUserByIdEventEmitter.emit(userId);
        this.service.findById(userId).subscribe(user => this.user = user);
      }
    });
  }

  onSubmit(userForm: NgForm): void {
    if(userForm.valid) {
      this.sharingData.newUserEventEmitter.emit(this.user);
      console.log(this.user);
    }
    userForm.reset();
    userForm.resetForm();
  }

  onClear(userForm: NgForm): void {
    // this.user = new User();
    userForm.reset();
    // userForm.resetForm();
  }
}
