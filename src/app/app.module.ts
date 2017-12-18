
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SharedModule } from './components/shared/shared.module'
import {MainPagesModule } from './components/main/main-pages.module'

import { AppComponent } from './app.component';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MainPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
