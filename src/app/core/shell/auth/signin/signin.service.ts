import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { global } from '../../../../utils/constants';
import { Signup, SignupTwo } from './signin';

@Injectable()
export class SignupService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  customersignUpOne(customerCredential: Signup): Observable<any> {
    const params = new HttpParams()
    .set('email', customerCredential.email)
    .set('password', customerCredential.password)
    .set('confirmPassword', customerCredential.confirmPassword);
    console.log('recibido', params);
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'account/register', params, {headers: headers});
  }

  customersignUpTwo(signuptwo: SignupTwo): Observable<any> {
    const params = JSON.stringify(signuptwo);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('recibido', signuptwo);
    return this._http.post(this.url + `customer/postcustomerregister`, params, { headers: headers });
  }

}


// ericcustomer3@gmail.com
// Qwerty1!