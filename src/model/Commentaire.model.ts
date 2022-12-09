import { Annonce } from "./Annonce.model"
import { Utilisateur } from "./Utilisateur.model"

export class Commentaire
{
    id_comm!:number
    comm!:string

    annonce!:Annonce
    user!:Utilisateur
}