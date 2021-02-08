import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import {EnrollmentService} from '../../services/enrollment.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user:User;
  name:string;

  constructor(private _user:EnrollmentService) { }

  ngOnInit(): void {

    
    let id = localStorage.getItem('userId');
    this._user.getUser(id).subscribe((data)=>{
      this.user=JSON.parse(JSON.stringify(data));
    
    this.name = this.user.name.split(' ')[0];
      
  });

}

}
