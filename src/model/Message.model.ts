import { Annonce } from "./Annonce.model"
import { Utilisateur } from "./Utilisateur.model"

export class Message
{
    id_msg!:number
    mail!:string
    objet!:string

    users!:Utilisateur[]
    annonce!:Annonce
}