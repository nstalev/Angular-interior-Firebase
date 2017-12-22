
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SharedModule } from './components/shared/shared.module'
import {MainPagesModule } from './components/main/main-pages.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarsModule } from './components/cars/cars.module'
import { HttpClientModule } from '@angular/common/http'

import { MyOwnCustomMaterialModule } from './core/AngularMaterials/MyOwnCustomMaterialModule'

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { CarService } from './core/services/cars/car.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MainPagesModule,
    BrowserAnimationsModule,
    CarsModule,
    HttpClientModule,
    MyOwnCustomMaterialModule
    
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
