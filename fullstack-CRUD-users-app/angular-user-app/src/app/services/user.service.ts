import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'John',
    lastname: 'Doe',
    email: 'johndoe@fjkajklweruvjlktiouyuiz.weriouvc',
    username: 'john',
    password: '123456'
  },{
    id: 2,
    name: 'Juan',
    lastname: 'Doe',
    email: 'juandoe@fjkajklweruvjlktiouyuiz.weriouvc',
    username: 'juan',
    password: '123456'
  }]

  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
