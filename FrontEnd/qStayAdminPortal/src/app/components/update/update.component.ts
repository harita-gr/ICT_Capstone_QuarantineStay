import { Component, OnInit } from '@angular/core';
import{User} from '../../classes/user';
import { Router } from '@angular/router';
import{UserServiceService} from '../../services/user-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  selectedUser:User= {name:'',password:'',password2:'',email:'',phone:''};
  statusMsgSuccess = "";
  statusMsgError = "";

  constructor(private _userService:UserServiceService,
    private _router:Router) { }

  ngOnInit(): void {

    let id = localStorage.getItem('editUserId');
    this._userService.getUser(id).subscribe((data) => {
      this.selectedUser=JSON.parse(JSON.stringify(data));
    })   
    console.log('Editing..'+id);
  }

  onSubmit(){
    let id = localStorage.getItem('editUserId');
    this._userService.updateUser(this.selectedUser,id).subscribe(
      (data)  =>{
       alert('Successfully Updated!Redirecting..');
       this.statusMsgError="";
       this.statusMsgSuccess="Successfully Updated";
       this._router.navigate(['users']);
      },
      err => {
        this.statusMsgError="Unknown Server Error! Please try again"
      }
    )
    
  }




}
