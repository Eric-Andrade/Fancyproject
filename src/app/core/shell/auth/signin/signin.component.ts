import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { SignupService } from './signin.service';
import { Signup, SignupTwo } from './signin';
import { PasswordValidation } from '../password-validation';
import { global } from '../../../../utils/constants';

@Component({
  selector: 'printmelon-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [ SignupService ]
})
export class SigninComponent implements OnInit {
  public status: string;
  public sigup: Signup;
  public FirstName;
  public LastName;
  public Email;
  public Password;
  public Phone;
  public signupone: Signup;
  public signuptwo: SignupTwo;
  public formsignupone: FormGroup;
  public formsignuptwo: FormGroup;
  public loading: boolean;
  public errorMessage;
  public message: boolean;
  public hide = true;
  public isLinear = false;
  public regexpEmail: string;
  public regexpPassword: string;
  public regexpLetters: string;
  public regexpPhone: string;
  constructor(private _signupservice: SignupService,
              private _route: ActivatedRoute,
              private _router: Router,
              fb: FormBuilder,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
            ) {
              iconRegistry.addSvgIcon(
                'showpass',
                sanitizer.bypassSecurityTrustResourceUrl('assets/showpass.svg'));
                this.regexpEmail = global.regexpEmail;
                this.regexpPassword = global.regexpPassword;
                this.regexpLetters = global.regexpLetters;
                this.regexpPhone = global.regexpPhone;

                this.formsignupone = fb.group({
                  // tslint:disable-next-line:max-line-length
                  email: ['newcustomer@gmail.com', [Validators.required, Validators.pattern(this.regexpEmail), Validators.email, Validators.minLength(5), Validators.maxLength(45) ]],
                  password: ['', [Validators.required, Validators.pattern(this.regexpPassword), Validators.minLength(5), Validators.maxLength(45) ]],
                  // tslint:disable-next-line:max-line-length
                  confirmPassword: ['', [Validators.required, Validators.pattern(this.regexpPassword), Validators.minLength(5), Validators.maxLength(45) ]]
                }, {
                  validator: PasswordValidation.MatchPassword // your validation method
                });

                this.formsignuptwo = fb.group({
                  // tslint:disable-next-line:max-line-length
                  FirstName: ['FirstName', [Validators.required, Validators.pattern(this.regexpLetters), Validators.minLength(3), Validators.maxLength(45) ]],
                  LastName: ['LastName', [Validators.required, Validators.pattern(this.regexpLetters), Validators.minLength(3), Validators.maxLength(45) ]],
                  // // tslint:disable-next-line:max-line-length
                  // tslint:disable-next-line:max-line-length
                  // Email: [ `${this.formsignupone.controls['email']}`, [Validators.required, Validators.pattern(this.regexpEmail), Validators.minLength(5), Validators.maxLength(45) ]],
                  // Password: ['Password1!', [Validators.required, Validators.pattern(this.regexpPassword), Validators.minLength(8), Validators.maxLength(45) ]],
                  // tslint:disable-next-line:max-line-length
                  Phone: ['1234567890', [Validators.required, Validators.pattern(this.regexpPhone), Validators.minLength(10), Validators.maxLength(10) ]],
                  CustomerTypeId: 1,
                  shop: ''
                });
               }

  ngOnInit() {

  }

  customersignUpOneSubmit(value: any): void {
    console.log('customersignUpOne');
    console.log(value);
    this.signupone = {
      email: value.email,
      password: value.password,
      confirmPassword: value.confirmPassword
    };
    this._signupservice.customersignUpOne(this.signupone).subscribe(
      response => {
       console.log('sigupone exitoso');
      //  this._router.navigate(['login']);
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
            console.log('Error on signin email: ', this.errorMessage);
            this.message = true;
        }
      });
  }


  customersignUpTwoSubmit(value: any): void {
    console.log('customersignUpTwo');
    console.log(value);
    // Email: this.formsignupone.controls['email'].value,
    // Password: this.formsignupone.controls['password'].value,
    this.signuptwo = {
      FirstName: value.FirstName,
      LastName: value.LastName,
      Email: this.formsignupone.controls['email'].value,
      Password: this.formsignupone.controls['password'].value,
      Phone: value.Phone,
      CustomerTypeId: 1,
      shop: ''
};

console.log('signuptwo');
    console.log(this.signuptwo);

    const formone = {
      email: this.formsignupone.controls['email'].value,
      password: this.formsignupone.controls['password'].value,
      confirmPassword: this.formsignupone.controls['confirmPassword'].value,
    };
    this.customersignUpOneSubmit(formone);

    setTimeout(() => {
      this._signupservice.customersignUpTwo(this.signuptwo)
      .subscribe(
        response => {
        console.log('siguptwo exitoso');
        this._router.navigate(['login']);
        },
        error => {
          this.errorMessage = <any>error;
          if (this.errorMessage != null) {
              console.log('Error on signin customer data: ', this.errorMessage);
              this.message = true;
          }
        });
    }, 1000);
  }

  checkEmail() {
    console.log('checaré el login en mi maquina de escribir invisible');
  }

}
