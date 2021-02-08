import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {EnrollmentService} from '../../services/enrollment.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    //User object
    User={
      email:'',
      password:''
    };

  submitted = false;
  errorMsg ='';

  constructor(private _enrollmentService:EnrollmentService,private _router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Validating login..');
    this.submitted=true;
    this._enrollmentService.login(this.User)
      .subscribe(
           data => {
             console.log('Success!',data);
             localStorage.setItem('token',data.token);
             localStorage.setItem('userId',data.id);
             console.log('from login component ID= ' +data.id);
             console.log('from login component - '+ data.token);
             this._router.navigate(['/home']);
                  },
          //  error => this.errorMsg = error
          error =>{ switch(error.status){
                 case 404:
                   this.errorMsg="User not found! Please SIGN UP!"
                   break;
                case 401:
                  this.errorMsg="Invalid Credentials"
                   break;
                default:
                  this.errorMsg="Uknown Server-side Error"
          }

          }
      )
  }

}