import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { Categorie } from 'src/model/Categorie.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  
  idCat!:number
  nom!:string
  categories!:Categorie[]

  categorie!:Categorie

  constructor(private catService:CategorieService, private route:ActivatedRoute, private uService:AuthentificationService){}


  
  ngOnInit(): void {
  this.afficherAll()
  this.categorie= new Categorie()
  }

  afficherAll()
  {
    this.catService.getAll().subscribe(response=>{
      this.categories=response
    })
  }

  afficherParId(id:number)
  {
    this.catService.getCategorieparId(id).subscribe
    (response=>this.categorie=response)
  }

  afficherParNom(nom:string)
  {
    
    this.catService.getCategorieparNom(this.nom).subscribe
    (response=>
      {
       this.categorie=response
      })
  }

  delete(id:number)
  {
    this.catService.deleteCategorie(id).subscribe(response=>this.afficherAll())
  }

  modifier(id:number)
  {
    this.catService.getCategorieparId(id).subscribe
    (response=>this.categorie=response)
  }

  chercher(event:any)
  {
    let cat=event.target.value;

   this.catService.chercherCat(cat).subscribe
    (response=>this.categories=response)
  }

  

  inform(f:NgForm)
  {
    this.catService.modifierCategorie(this.categorie).subscribe(
      response=>
      {
        this.categorie=new Categorie()
        this.afficherAll();
      }
    )
    f.resetForm();
  } 


  logout(){

    this.uService.logout()
  }
}
