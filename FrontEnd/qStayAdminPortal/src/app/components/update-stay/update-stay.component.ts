import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Stay} from '../../classes/stay';
import{StayService} from '../../services/stay.service';

@Component({
  selector: 'app-update-stay',
  templateUrl: './update-stay.component.html',
  styleUrls: ['./update-stay.component.css']
})
export class UpdateStayComponent implements OnInit {

  statusMsgSuccess = "";
  statusMsgError = "";
  selectedStay:Stay = {
    hotelName:'',
    distanceFromAirport:'',
    price:'',
    rating:'',
    noOfRooms:0,
    district:'',
    facilities:null,
    image:'',
    address:'',
    type:''
  }
  facilities:string[]=[];
  airports = ['Calicut','Cochin','Kannur','Kasargod','Kollam','Kottayam','Thiruvananthapuram'];

  constructor(private _stayService:StayService,
    private _router:Router) {
    
   }

  ngOnInit(): void {

    let id = localStorage.getItem('editStayId');
    this._stayService.getStay(id).subscribe((stay) => {
      this.selectedStay=JSON.parse(JSON.stringify(stay));
    })   
    console.log('Editing..'+id);
  }

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
    this.selectedStay.facilities = this.facilities;
    let id = localStorage.getItem('editStayId');
    this._stayService.updateStay(this.selectedStay,id).subscribe(
      (data)  =>{
       alert('Successfully Updated!Redirecting..');
       this.statusMsgError="";
       this.statusMsgSuccess="Successfully Updated";
       this._router.navigate(['registeredStays']);
      },
      err => {
        this.statusMsgError="Unknown Server Error! Please try again"
      }
    )
    
  }

}
