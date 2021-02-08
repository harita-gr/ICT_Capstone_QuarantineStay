import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {EnrollmentService} from './services/enrollment.service'

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private _authService:EnrollmentService,
              private _router:Router) {}

  canActivate(): boolean {
    if(this._authService.loggedIn()){
      return true;
    } else {
      alert('Please login to continue!');
      this._router.navigate(['/userLogin']);
      return false;
    }
  }

}
