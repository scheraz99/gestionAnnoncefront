import { Annonce } from "./Annonce.model"
import { Commentaire } from "./Commentaire.model"
import { Message } from "./Message.model"
import { Role } from "./Role.model"

export class Utilisateur{

    id!:number
    nom!:string
    prenom!:string
    mail!:string
    password!:string
    username!:string
    valide!:boolean

    roles!:Role[]
    comms!:Commentaire[]
    messages!:Message[]
    annonces!:Annonce[]

}