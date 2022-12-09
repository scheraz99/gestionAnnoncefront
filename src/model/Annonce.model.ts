import { Categorie } from "./Categorie.model"
import { Commentaire } from "./Commentaire.model"
import { Message } from "./Message.model"
import { Utilisateur } from "./Utilisateur.model"

export class Annonce{

    idannonce!:number
    titre!:string
    description!:string
    datepubli!:Date
    dateexpi!:Date
    photo!:string
    valide!:boolean

    categorie!:Categorie
    commentaires!:Commentaire[]
    user!:Utilisateur
    message!:Message



}