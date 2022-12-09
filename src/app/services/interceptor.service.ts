import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (sessionStorage.getItem('token')) {
      let auth=sessionStorage.getItem('token')?? "";
      //if (sessionStorage.getItem('chainecnx')) {
        //let auth=sessionStorage.getItem('chainecnx')?? "";
      req=req.clone({
          setHeaders:{
              Authorization: auth
          }
        })
       
     

  }
  return next.handle(req);

  }
}
