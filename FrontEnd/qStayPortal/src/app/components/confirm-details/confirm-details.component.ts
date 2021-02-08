import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
//import { plainToClass } from "class-transformer"; 
import { Router, ActivatedRoute} from '@angular/router';


import {Stay} from '../../classes/stay'
import {Order} from '../../classes/order';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {

  orderDetails:Order= {
    fullName: "",
    age:null,
    phone: "",
    from:"",
    airport:"",
    dateCheckin :"",
    adultNo:null,
    childNo:null,
    roomType:"",
    noOfDays:null,
    optTransport:false,
    optMedical:false
 }

 stay:Stay ={
   hotelName:"",
   district:"",
   rating:"",
   address:"",
   price:"",
   image:"",
   distanceFromAirport:"",
   type:"",
   noOfRooms:0,
   facilities:[]
 }

 totalPeople=0;
 totalPrice=0;


  constructor( private route: ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {

    this.orderDetails = JSON.parse(this.route.snapshot.paramMap.get('orderDetails')); 
    this.stay = JSON.parse(this.route.snapshot.paramMap.get('stayDetails'));
    console.log("Confirming..",this.orderDetails);
    console.log("Confirming..",this.stay);

    this.totalPeople = Number (this.orderDetails.childNo) + Number(this.orderDetails.adultNo);
    this.totalPrice = Number( this.orderDetails.noOfDays) * Number(this.stay.price) * this.totalPeople ;
  
        
        // this.orderDetails =  JSON.parse(JSON.stringify(localStorage.getItem('orderDetails')));

        // this.tempVal=localStorage.getItem('orderDetails');
        
        // console.log("Confirming..",this.tempVal);
        // console.log(typeof(this.orderDetails));

        
        // console.log("Confirming..",this.orderDetails);
        // console.log("Full name:",this.orderDetails['fullName']);


    // let details = Object.assign(new Order('',0,'','','','',0,0,'',0,false,false), this.orderDetails );

    //let details  = plainToClass(Order, this.orderDetails);
    
    
  }

  cancelAlert(){
    var ans = window.confirm('Are you sure you want to cancel?');
    if(ans){
      this._router.navigate(['/bookStay']);
    }
  }

  goToPayment(){
    this._router.navigate(['/makePayment',{orderDetails:JSON.stringify(this.orderDetails),stayDetails:JSON.stringify(this.stay),totalPrice:JSON.stringify(this.totalPrice)}]);
  }


 
}
