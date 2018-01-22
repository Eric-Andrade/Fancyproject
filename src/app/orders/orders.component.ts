import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/shell/auth/login/login.service';
@Component({
  selector: 'printmelon-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [ LoginService ]
})
export class OrdersComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    console.log('is customer logged:', this._loginService.getUserLoggedIn());
  }

}
