import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Customer } from '../customer';

@Injectable()
export class LoginService {
  public url: string;
  private isUserLoggedIn;
  public userName;
  public tokenAuth;

  constructor(public _http: HttpClient) {
    this.url = 'https://printmelonwebappapidev.azurewebsites.net/';
    this.isUserLoggedIn = false;
    this.userName  = 'admin';
  }

  customerLogin(customerCredential: Customer): Observable<any> {
    const params = new HttpParams()
    .set('username', customerCredential.username)
    .set('password', customerCredential.password)
    .set('grant_type', 'password');
    console.log('recibido', params);
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'token', params, {headers: headers});
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  storedToken (tokenAuth) {
    if (!tokenAuth) {
      console.log('Valor recibido if');
      return false;
    } else {
      console.log('Valor recibido false else');
      this.setUserLoggedIn();
      localStorage.setItem('tokenAuth', JSON.stringify(tokenAuth));
    }

  }

  logout() {
    this.tokenAuth = null;
    localStorage.clear();
  }

  private getHeaders() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('cache-control', 'no-cache');
    headers.append('status', 'OK');
    return headers;
  }

}
