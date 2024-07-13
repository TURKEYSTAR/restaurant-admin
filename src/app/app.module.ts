import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { BreackfastComponent } from './breackfast/breackfast.component';
import { PlatsComponent } from './plats/plats.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { ViennoiseriesComponent } from './viennoiseries/viennoiseries.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { AjoutCategorieComponent } from './ajout-categorie/ajout-categorie.component';
import { AjoutProduitsComponent } from './ajout-produits/ajout-produits.component';
import { EditProduitsComponent } from './edit-produits/edit-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    SidebarComponent,
    CommandesComponent,
    ClientsComponent,
    LoginComponent,
    BreackfastComponent,
    PlatsComponent,
    FastfoodComponent,
    ViennoiseriesComponent,
    BoissonsComponent,
    AjoutCategorieComponent,
    AjoutProduitsComponent,
    EditProduitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




