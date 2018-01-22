import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { tokenAuth } from '../auth/login/authguard.guard';
import { LoginService } from '../auth/login/login.service';

@Component({
  selector: 'printmelon-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [ LoginService ]
})
export class WelcomeComponent implements OnInit {
  public tokenAuth;

  constructor(private _loginService: LoginService,
    private _route: ActivatedRoute,
    private _router: Router) {
      this.tokenAuth = tokenAuth;
    }

  ngOnInit() {

    console.log('is customer logged:', this._loginService.getUserLoggedIn());
  }

  goLogin() {
    this._router.navigate(['login']);

  }
}
