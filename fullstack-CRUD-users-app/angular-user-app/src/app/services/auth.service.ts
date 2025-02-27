import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:8080/login';

  private _token: string | undefined;

  private _user: any = {
    isAuth: false,
    isAdmin: false,
    user: undefined
  };

  constructor(private http: HttpClient) { }

  loginUser({username, password}: any): Observable<any> {
    return this.http.post<any>(this.url, {username, password});
  }

  set user(user: any) {
    this._user = user;
    sessionStorage.setItem('login', JSON.stringify(login));
  }

  get user() {
    return this._user;
  }

  set token(token: any) {
    this._token = token;
    sessionStorage.setItem('token', token);
  }

  get token() {
    return this._token;
  }
}
