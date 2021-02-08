import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';;
import {OrderSave} from '../../classes/order-save';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders:OrderSave[];
  constructor(private _order:BookingService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('userId');

    this._order.getOrderList(id).subscribe((order)=>{
      this.orders=JSON.parse(JSON.stringify(order));
  });
}

alertCancel(){
  alert('Please contact us on TOLL FREE HELPLINE (+1800-000001000) to cancel the order! ')
}


}