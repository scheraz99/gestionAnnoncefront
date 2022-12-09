import { Annonce } from "./Annonce.model"

export class Categorie{

    id_cat!:number
    nomcat!:string

    annonces!:Annonce[]
}