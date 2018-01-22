import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/shell/auth/login/login.service';
import { DesignsService } from './designs.service';
import { Designs } from './designs';

@Component({
  selector: 'printmelon-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss'],
  providers: [ LoginService ]
})
export class DesignsComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    console.log('is customer logged:', this._loginService.getUserLoggedIn());
  }

}
