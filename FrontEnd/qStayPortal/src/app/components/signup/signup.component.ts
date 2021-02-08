import { Component, OnInit } from '@angular/core';

import{User} from '../../classes/user'
import {EnrollmentService} from '../../services/enrollment.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _enrollmentService:EnrollmentService) { }

  ngOnInit(): void {
  }

  userModel = new User('','','','','');
  submitted = false;
  successMsg='';

  onSubmit(){
    console.log('Submitting sign up form..');
    this.submitted=true;
    // console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
           data => {console.log('Success!',data);
                     this.successMsg =" User registered successfully! Please Login"},
           error => console.error('Error!',error)
      )
  }
}
