import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './routes/homepage/homepage.component';


import { GeolocationModule } from './geolocation/geolocation.module';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Agrega IonicModule aquí,
    AppRoutingModule,
    GeolocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
