import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { AuthentificationRequest } from 'src/model/AuthentificationRequest.model';

@Component({
  selector: 'app-authentif',
  templateUrl: './authentif.component.html',
  styleUrls: ['./authentif.component.css']
})
export class AuthentifComponent implements OnInit {
 
  username!:string
  password!:string
  req!:AuthentificationRequest

  constructor(private uService:AuthentificationService, private route:Router)
  {}
 
  ngOnInit(): void {
    
  }

  login()
 { 
 // this.req=new AuthentificationRequest()
    this.uService.login(this.username, this.password).subscribe(response=>
      {
        console.log(response.jwt)
        sessionStorage.setItem("token", "Bearer "+response.jwt)
        /*
        console.log('connexion ok')
        let authchaine='Basic '+window.btoa(this.username+':'+this.password)
        sessionStorage.setItem('chainecnx', authchaine)
        this.route.navigateByUrl("/affichercitoyen") */

        this.route.navigateByUrl("/accueil") 
      },
      error=> {
        console.log('connexion non ok')
      })
 }

}
