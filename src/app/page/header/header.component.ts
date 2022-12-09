import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private route:Router,private uService:AuthentificationService, private catService:CategorieService){}
  logout(){

    this.uService.logout()
  }

  categorie(){

    this.catService.getAll()
    this.route.navigateByUrl("/affichercategorie")

  }
}
