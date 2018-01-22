import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

export let tokenAuth: string = localStorage.getItem('tokenAuth');

@Injectable()
export class AuthguardGuard implements CanActivate {
  redirectUrl;
  constructor(
    private authService: LoginService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (tokenAuth) {
      console.log('got value true');
      setTimeout(() => {
        this._router.navigate(['availableproducts']);
       }, 5000 );
      return true;
    } else {
      this._router.navigate(['/']);
        console.log('You are not authenticated');
      return false;
    }
  }
}
