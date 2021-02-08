import { Injectable } from '@angular/core';
import { Stay } from '../classes/stay';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StayService {
 


  _url='http://localhost:3000/';

  addStay(stay: Stay) {
    return this._http.post<any>(this._url+'admin/stay/addStay',stay);
  }

  getStayList(){
    return this._http.get<any>(this._url+"admin/stay/getList"); 
  }

  getStay(id: string) {
    return this._http.get<any>(this._url+"admin/stay/getStay/"+id); 
  }

  updateStay(selectedStay: Stay, id: string) {
    return this._http.post<any>(this._url+"admin/stay/updateStay/"+id,selectedStay);
  }

  deleteStay(id: any) {
    return this._http.delete(this._url+"admin/stay/deleteStay/"+id);
  }

  constructor(private _http: HttpClient) { }
}

