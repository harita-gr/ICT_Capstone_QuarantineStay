import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


import {Stay} from '../../classes/stay'
import {Order} from '../../classes/order';
import {OrderSave} from '../../classes/order-save';

import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cardNo:string;
  cardExpiry:string;
  cardCVCNo:string;


  totalPrice=0;
  isLoading=false;

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


  constructor( private _book:BookingService,private route: ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {

    this.totalPrice = JSON.parse(this.route.snapshot.paramMap.get('totalPrice'));
    console.log('Price:',this.totalPrice);
    this.orderDetails = JSON.parse(this.route.snapshot.paramMap.get('orderDetails')); 
    this.stay = JSON.parse(this.route.snapshot.paramMap.get('stayDetails'));
  }

  cancelAlert(){
    var ans = window.confirm('Are you sure you want to cancel?');
    if(ans){
      this._router.navigate(['/bookStay']);
    }
  }

  placeOrder(){
    this.isLoading=true;
    var saveOrder = new OrderSave(
      localStorage.getItem('userId'),
      localStorage.getItem('viewStayId'),
      this.stay.hotelName,
      this.orderDetails.airport,
      this.stay.address,
      this.totalPrice,
      this.stay.image,
      this.stay.distanceFromAirport,
      this.orderDetails.noOfDays,
      this.orderDetails.optMedical,
      this.orderDetails.optTransport,
      this.orderDetails.adultNo,
      this.orderDetails.childNo
    );
    console.log('Placing order..',saveOrder);
    this._book.placeOrder(saveOrder)
    .subscribe ();
    setTimeout(() =>{
      this.isLoading=false;
      alert('Order Placed Successfully');
      this._router.navigate(['/bookStay']);
    },4000)
   
    // this._router.navigate(['/orderSuccess',{orderDetails:JSON.stringify(this.orderDetails),stayDetails:JSON.stringify(this.stay),totalPrice:JSON.stringify()}]);
  }
  


}
