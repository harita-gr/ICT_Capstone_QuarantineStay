import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from '../classes/user';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'; 
import { Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
   
  _url='http://localhost:3000/';
  
  constructor(private _http: HttpClient,
              private _router:Router) { }

  enroll(user: User){
     return this._http.post<any>(this._url+'user/signUp',user);
     //Post will return response as observable. Subscribe it in component
  }

  login(user: any){
    return this._http.post<any>(this._url+'user/signIn',user)
              .pipe(catchError(this.errorHandler));
    //Post will return response as observable. Subscribe it in component
 }

 loggedIn(){
   return !!localStorage.getItem('token');
 }

 logOutUser(){
   localStorage.removeItem('token');
   this._router.navigate(['/home']);

 }

 getToken(){
   console.log('from enrol service -' + localStorage.getItem('token'));
  return localStorage.getItem('token');
}


getUser(id: any) {
  return this._http.get<any>(this._url+"admin/users/getUser/"+id); 
}

 errorHandler(error:HttpErrorResponse){

   return throwError(error);
 }
}
