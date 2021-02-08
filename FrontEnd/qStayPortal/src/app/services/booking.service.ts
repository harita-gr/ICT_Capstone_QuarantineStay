import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import{Search} from '../classes/search';
import { OrderSave } from '../classes/order-save';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  constructor(private _http: HttpClient,
    private _router:Router) { }

  _url='http://localhost:3000/';

  searchStay(searchCriteria:any){
    console.log('search options',searchCriteria)
    return this._http.post<any>(this._url+"user/book/searchStay",searchCriteria); 
  }

  getStay(id: string) {
    return this._http.get<any>(this._url+"user/book/viewStay/"+id); 
  }

  placeOrder(saveOrder: OrderSave) {
    return this._http.post<any>(this._url+"user/book/placeOrder",saveOrder); 
  }

  getOrderList(id:string) {
    return this._http.get<any>(this._url+"user/book/getOrderList/"+id);   
  }
}
