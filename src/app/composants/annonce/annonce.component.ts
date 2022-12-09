import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Annonce } from 'src/model/Annonce.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit{

  idAnnonce!:number
  titre!:string
  annonces!:Annonce[]

  annonce!:Annonce

  constructor(private aservice:AnnonceService, private route:ActivatedRoute,private router:Router, private uService:AuthentificationService){}
  
  ngOnInit(): void {
    this.afficherAll();
    this.annonce=new Annonce()
  }

  afficherAll()
  {
    this.aservice.getAll().subscribe(response=>{
    
      for(let a of response)
      {
        console.log(a)
      }
      this.annonces=response
    })
  }

  afficherParId(id:number)
  {
    this.aservice.getAnnonceparId(id).subscribe
    (response=>this.annonce=response)
  }

  afficherParTitre(titre:string)
  {
    
    this.aservice.getAnnonceparTitre(this.titre).subscribe
    (response=>
      {
       this.annonce=response
      })
  }

  delete(id:number)
  {
    this.aservice.deleteAnnonce(id).subscribe(response=>this.afficherAll())
  }

  modifier(id:number)
  {
    this.aservice.getAnnonceparId(id).subscribe
    (response=>this.annonce=response)
  }

  chercher(event:any)
  {
    let ann=event.target.value;

   this.aservice.getAnnonceparMotcle(ann).subscribe
    (response=>this.annonces=response)
  }

  

  inform(f:NgForm)
  {
    this.aservice.modifierAnnonce(this.annonce).subscribe(
      response=>

      {
        this.annonce=new Annonce()
        this.afficherAll();
      }
    )
    f.resetForm();
  } 


  logout(){

    this.uService.logout()
  }

  accueil()
  {
    this.router.navigateByUrl("/accueil")
  }
}
