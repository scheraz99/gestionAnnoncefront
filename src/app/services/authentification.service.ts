import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationResponse } from 'src/model/AuthentificationResponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient, private router:Router) { }

  login(username:string,password:string)
  {
    return this.http.post<AuthentificationResponse>('http://localhost:8050/loginUserJwt', {username,password })
  }


  logout() 
  {
    // remove user from local storage to log user out
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('connexion');
  }

}
