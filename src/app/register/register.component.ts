import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // pass data from home-register component (parent-child)
 // @Input() usersFromHomeComponent: any;
   // pass data from register-home component (child-parent)
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(public _accountService: AccountService, private _toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this._accountService.register(this.model).subscribe(result => {
      console.log(result);
      this.cancel();
    }, error =>{
      console.log(error);
      this._toastr.error(error.error);
    }
    )
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
