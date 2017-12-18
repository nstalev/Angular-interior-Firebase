import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MainComponents } from './index';

@NgModule({
  declarations: [
    ...MainComponents
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...MainComponents
  ]
})
export class MainPagesModule {  }