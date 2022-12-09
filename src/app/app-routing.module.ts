import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './composants/annonce/annonce.component';
import { AuthentifComponent } from './composants/authentif/authentif.component';
import { CategorieComponent } from './composants/categorie/categorie.component';
import { HeaderComponent } from './page/header/header.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'accueil' , component:HeaderComponent},
  {path:'connexion' , component:AuthentifComponent},
  {path:'affichercategorie' , component:CategorieComponent, canActivate:[AuthGuard]},
  {path:'afficherannonces' , component:AnnonceComponent, canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
