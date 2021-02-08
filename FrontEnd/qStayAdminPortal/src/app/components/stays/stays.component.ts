import { Component, OnInit } from '@angular/core';
import {Stay} from '../../classes/stay';
import{StayService} from '../../services/stay.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stays',
  templateUrl: './stays.component.html',
  styleUrls: ['./stays.component.css']
})
export class StaysComponent implements OnInit {

  airports = ['Calicut','Cochin','Kannur','Kasargod','Kollam','Kottayam','Thiruvananthapuram'];
  stays:Stay[];

  constructor(private _stayService:StayService,
    private _router:Router) {
    
   }

  ngOnInit(): void {

    this._stayService.getStayList().subscribe((data)=>{
      this.stays=JSON.parse(JSON.stringify(data));
  });
}

  stay = new Stay('','','','','','','','',0,null);

  facilities:string[]=[];
  successMsg='';
  errorMsg='';

  getFacility(e:any,value:string){
    if(e.target.checked){
        console.log(value  +" -checked");
        this.facilities.push(value);
        console.log(this.facilities);

    }
    else{
      console.log(value +" - unchecked");
      this.facilities = this.facilities.filter(m => m!=value);
      console.log(this.facilities);
    }

  }

  onSubmit(){
    this.stay.facilities = this.facilities;
    console.log('Submitting ADD STAY form..');    
    console.log(this.stay);
    this._stayService.addStay(this.stay)
      .subscribe(
           data => {console.log('Success!',data);
                     this.successMsg ="Added successfully! Please refresh page"},
           error => {
             console.error('Error!',error);
             this.errorMsg="Unkown server error! Please try again"
           }
      )
  }

  editStay(stay:any){
    localStorage.setItem("editStayId", stay._id.toString());
    this._router.navigate(['/updateStay']);
  };

  deleteStay(stay:any){

    var answer=window.confirm('Are you sure you want to delete the stay?');
    if (answer)
    {
      const id=stay._id.toString();
      this._stayService.deleteStay(id)
      .subscribe((data) => {
        this.successMsg="Stay deleted succcessfully! Please refresh Page";
        this.stays = this.stays.filter(p => p !== stay);        
      })  
    }

    else{
      this.errorMsg ='Cancelled operation';
    }

  };
  
}
