import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  //loggedIn: boolean;
  //currentUser$: Observable<User>;

  constructor(public _accountService: AccountService, private router: Router, private _toastr: ToastrService) {}

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this._accountService.currentUser$;
  }

  // form login method
  login() {
    this._accountService.login(this.model).subscribe(
      (res) => {
        this.router.navigateByUrl('/members');
        //this.loggedIn = true;
      },
      (error) => {
        console.log(error);
        this._toastr.error(error.error);
      }
    );
  }

  logout() {
    this._accountService.logout();
    this.router.navigateByUrl('/');
    //this.loggedIn = false;
  }

  // getCurrentUser() {
  //   this._accountService.currentUser$.subscribe(
  //     (user) => {
  //       //this.loggedIn = !!user;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
