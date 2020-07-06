import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private urlAPI = 'http://localhost:8080/mobilestore/';
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login = (email: string, password: string) => {
    console.log(email);
    console.log(password);
    const loginUrl = `${this.urlAPI}/api/v1/user/signin`;
    console.log(loginUrl);
    return this.http
      .post<any>(loginUrl, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          // console.log(user);
          if (user != null) {
            const newUser = {} as User;
            newUser.id = user.id;
            newUser.email = user.email;
            newUser.role = user.role;
            newUser.password = user.password;
            this.currentUserSubject.next(newUser);
            return user;
          } else {
            return null;
          }
        })
      );
  }

  public logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.currentUserSubject.next(null);
  }
}
