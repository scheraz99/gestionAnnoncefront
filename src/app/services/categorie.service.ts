import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from 'src/model/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

cat!:Categorie

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Categorie[]>('http://localhost:8050/api/categories')
  }

  getCategorieparId(id:number)
  {
    return this.http.get<Categorie>(`http://localhost:8050/api/categories/${id}`)
  }

  deleteCategorie(id:number)
  {
    return this.http.delete<Categorie>(`http://localhost:8050/api/categories/${id}`) 
  }

  modifierCategorie(cat:Categorie)
  {
    return this.http.put<Categorie>('http://localhost:8050/api/categories', cat) 
  }

  getCategorieparNom(nom:string)
  {
    return this.http.get<Categorie>(`http://localhost:8050/api/categoriesBynom/${nom}`)
  }

  chercherCat(recherche:string)
  {
    return this.http.get<Categorie[]>(`http://localhost:8050/api/categoriesrecherche/${recherche}`)
  }
}
