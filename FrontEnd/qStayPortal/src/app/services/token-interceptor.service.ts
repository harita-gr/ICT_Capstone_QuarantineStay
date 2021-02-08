import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http'
import { EnrollmentService} from './enrollment.service'
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor( private injector:Injector) { }

  intercept(req:any,next:any){
    let authService=this.injector.get(EnrollmentService);
    console.log('token value:' +authService.getToken());
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
