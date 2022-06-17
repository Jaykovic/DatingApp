import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DatingApp';
  users: any;
  constructor(private _accountService: AccountService){}


  ngOnInit(){
    //this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this._accountService.setCurrentUser(user);
  }
  // getUsers(){
  //   this.http.get('https://localhost:5001/api/Users').subscribe({
  //     next: response => this.users = response,
  //     error: error => console.log(error)
  //   }
  //   );
  // }
}
