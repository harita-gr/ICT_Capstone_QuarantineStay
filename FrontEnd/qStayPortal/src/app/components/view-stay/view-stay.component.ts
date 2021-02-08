import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookingService } from 'src/app/services/booking.service';
import {Stay} from '../../classes/stay';
import {Order} from '../../classes/order';

@Component({
  selector: 'app-view-stay',
  templateUrl: './view-stay.component.html',
  styleUrls: ['./view-stay.component.css']
})
export class ViewStayComponent implements OnInit {

  stay:Stay;
  isBookNow:false;
  display='none';
  order:Order= {
    //  stayDetails:new Stay('','','','','','','','',0,null),
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
     optMedical:false,     
  }

  airports = ['Calicut','Cochin','Kannur','Kasargod','Kollam','Kottayam','Thiruvananthapuram'];

  constructor(private _book:BookingService,private _router:Router) { }


  ngOnInit(): void {

    let id = localStorage.getItem('viewStayId');
    this._book.getStay(id).subscribe((data) => {
      this.stay=JSON.parse(JSON.stringify(data));
    })   

    // this.order.stayDetails = this.stay;
  }

  submitForm(){
    console.log('Booking..')
    //localStorage.setItem('orderDetails',JSON.stringify(this.order));
    this.display='none';
    this._router.navigate(['/confirmDetails',{orderDetails:JSON.stringify(this.order),stayDetails:JSON.stringify(this.stay)}]);
  }

  transportOption(){
    this.order.optTransport = !this.order.optTransport;
  }

  medOption(){
    this.order.optMedical = !this.order.optMedical;
  }

}
