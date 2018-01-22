import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from './login.service';
import { Customer } from '../customer';
import { global } from '../../../../utils/constants';

@Component({
  selector: 'printmelon-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  public customer: Customer;
  public tokenAuth: any;
  public username: string;
  public password: string;
  public loading: boolean;
  public errorMessage;
  public hide = true;
  public message: boolean;
  public formLogin: FormGroup;
  public regexpEmail: string;
  public regexpPassword: string;
  public failLogin: string;
  public failLoginClass = false;

  constructor(private _loginService: LoginService,
              private _route: ActivatedRoute,
              private _router: Router,
              fb: FormBuilder,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
                iconRegistry.addSvgIcon(
                  'showpass',
                  sanitizer.bypassSecurityTrustResourceUrl('assets/showpass.svg'));
                this.regexpEmail = global.regexpEmail;
                this.regexpPassword = global.regexpPassword;
                this.failLogin = '';
                // this.customer = {
                //   username: 'newcustomer@gmail.com',
                //   password: '12345678',
                //   grant_type: `password`
                // };

                this.formLogin = fb.group({
                  email: ['newcustomer@gmail.com', [Validators.required, Validators.pattern(this.regexpEmail), Validators.email]],
                  password: ['Qwerty1!', [Validators.required, Validators.pattern(this.regexpPassword)]]
                });
               }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log('onSubmit');
    console.log(value);
    this.customer = {
      username: value.email,
      password: value.password,
      grant_type: `password`
    };
      this._loginService.customerLogin(this.customer).subscribe(
        response => {
          this.tokenAuth = response;
          console.log(response);
          if (response === null) {
            console.log('calló en el if');
          } else {
            const tokenAuth = this.tokenAuth.access_token;
            this._loginService.storedToken(tokenAuth);
            this._router.navigate(['availableproducts']);
            setTimeout(() => {
              location.reload();
              this._router.navigate(['availableproducts']);
             }, 1000 );
          }
        },
        error => {
          this.errorMessage = <any>error;
          if (this.errorMessage != null) {
              this.failLogin = 'Email or password is not correct, try again please';
              this.failLoginClass = true;
              this.formLogin.controls['password'].setValue('');
              console.log('Error al loggerse: ', this.errorMessage);
              this.message = true;
          }
        });
  }
}
