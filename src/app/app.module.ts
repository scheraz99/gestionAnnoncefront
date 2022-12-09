import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InterceptorService } from './services/interceptor.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthentifComponent } from './composants/authentif/authentif.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { CategorieComponent } from './composants/categorie/categorie.component';
import { AnnonceComponent } from './composants/annonce/annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentifComponent,
    HeaderComponent,
    FooterComponent,
    CategorieComponent,
    AnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass:InterceptorService , multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
