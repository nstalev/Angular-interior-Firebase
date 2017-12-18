import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';


import { MainComponents } from './index';

@NgModule({
  declarations: [
    ...MainComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    ...MainComponents
  ]
})
export class MainPagesModule {  }