import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from '../classes/user';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 

  _url='http://localhost:3000/';
  
  constructor(private _http: HttpClient) { }

  enroll(user: User){
     return this._http.post<any>(this._url+'user/signUp',user);
     //Post will return response as observable. Subscribe it in component
  }

  login(user: any){
    return this._http.post<any>(this._url+'user/signIn',user)
              .pipe(catchError(this.errorHandler));
    //Post will return response as observable. Subscribe it in component
 }

 getUserList(){
  return this._http.get<any>(this._url+"admin/users/getList");   
}

getUser(id: any) {
  return this._http.get<any>(this._url+"admin/users/getUser/"+id); 
}

updateUser(selectedUser: User, id: string) {
  return this._http.post<any>(this._url+"admin/users/updateUser/"+id,selectedUser); 
}

deleteUser(id: any) {
  return this._http.delete(this._url+"admin/users/deleteUser/"+id);
}
 errorHandler(error:HttpErrorResponse){

   return throwError(error);
 }
  
}
