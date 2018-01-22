import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from '../auth/login/login.service';
import { global } from '../../../utils/constants';
import { tokenAuth } from '../auth/login/authguard.guard';

@Component({
  selector: 'printmelon-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ LoginService ]
})
export class IndexComponent implements OnInit {
  public companyname: string;
  public navbarlinks: Array<string>;
  public usermame: any = '';
  public tokenAuth;

  constructor(private _loginService: LoginService,
    private _router: Router,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'more_vert',
        sanitizer.bypassSecurityTrustResourceUrl('assets/more_vert.svg'));
      iconRegistry.addSvgIcon(
        'notifications',
        sanitizer.bypassSecurityTrustResourceUrl('assets/notifications.svg'));

        this.companyname = global.companyname;
        this.navbarlinks = [
          'orders',
          'designs',
          'stores',
        ];
        this.tokenAuth = tokenAuth;
     }

  ngOnInit() {
    this.usermame = this._loginService.userName;
    console.log('is customer logged:', this._loginService.getUserLoggedIn());
  }

  closeSession() {
    this._loginService.logout();
    location.reload();
    }

}
