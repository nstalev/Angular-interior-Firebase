
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SharedModule } from './components/shared/shared.module'
import {MainPagesModule } from './components/main/main-pages.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarsModule } from './components/cars/cars.module'
import { HttpClientModule } from '@angular/common/http'



import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


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
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
