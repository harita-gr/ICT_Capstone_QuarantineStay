import { Component, OnInit } from '@angular/core';
import{User} from '../../classes/user';
import { Router } from '@angular/router';
import{UserServiceService} from '../../services/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  

  constructor(private _userService:UserServiceService,
              private _router:Router) { }

  ngOnInit(): void {
    this._userService.getUserList().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data));
  })
}
   
  userModel = new User('','','','','');
  submitted = false;
  showEditModal:boolean = false;
  statusMsgSuccess = "";
  statusMsgError = "";

  onSubmit(){
    console.log('Submitting sign up form..');
    this.submitted=true;
    // console.log(this.userModel);
    this._userService.enroll(this.userModel)
      .subscribe(
           data => {
             console.log('Success!',data);
             this.statusMsgSuccess="User created succcessfully! Please refresh Page"
             this._router.navigate(['/users']);
            },
             
          error => {
            console.error('Error!',error);
            this.statusMsgError="Unknown Error! Please try again"
          }
      )
  }

  editUser(user:any){
    localStorage.setItem("editUserId", user._id.toString());
    this._router.navigate(['/update']);
  }

  deleteUser(user:any){
      var answer=window.confirm('Are you sure you want to delete the user?');
      if (answer)
      {
        const id=user._id.toString();
        this._userService.deleteUser(id)
        .subscribe((data) => {
          this.statusMsgSuccess="User deleted succcessfully! Please refresh Page";
          this.users = this.users.filter(p => p !== user);        
        })  
      }

      else{
        console.log('Cancelled operation');
      }

  }
}
