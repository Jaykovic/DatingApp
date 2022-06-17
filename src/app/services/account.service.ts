import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  // login
  login(model: any)
  {
    return this.http.post(this.baseUrl + 'userAccount/login', model).pipe(
      map((response: User) =>{
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

   // register method
   register(model:any){
     return this.http.post(this.baseUrl + 'userAccount/Register', model).pipe(
       map((user: User) =>{
         if(user){
           localStorage.setItem('user', JSON.stringify(user));
           this.currentUserSource.next(user);
         }
       })
     )
   }

  // set user for persistent login
  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  // logout method
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
