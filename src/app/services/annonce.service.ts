import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from 'src/model/Annonce.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  annonce!:Annonce

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get<Annonce[]>('http://localhost:8050/api/annonces')
  }

  getAnnonceparId(id:number)
  {
    return this.http.get<Annonce>(`http://localhost:8050/api/annonces/${id}`)
  }

  deleteAnnonce(id:number)
  {
    return this.http.delete<Annonce>(`http://localhost:8050/api/annonces/${id}`) 
  }

  modifierAnnonce(annonce:Annonce)
  {
    return this.http.put<Annonce>('http://localhost:8050/api/annonces', annonce) 
  }

  getAnnonceparTitre(titre:string)
  {
    return this.http.get<Annonce>(`http://localhost:8050/api/annoncesBytitre/${titre}`)
  }

  getAnnonceparDate(datepubli:Date)
  {
    return this.http.get<Annonce>(`http://localhost:8050/api//annoncesBydate/${datepubli}`)
  }
  
}
