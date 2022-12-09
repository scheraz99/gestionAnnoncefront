import { Utilisateur } from "./Utilisateur.model"

export class Role {

    id_role!:number
    nom_role!:string

    users!:Utilisateur
}