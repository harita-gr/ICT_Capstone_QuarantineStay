import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import {EnrollmentService} from '../../services/enrollment.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  user:User;

  constructor(private _user:EnrollmentService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('userId');
    this._user.getUser(id).subscribe((data)=>{
      this.user=JSON.parse(JSON.stringify(data));
  });
}

}
