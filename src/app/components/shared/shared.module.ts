import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MyOwnCustomMaterialModule } from './../../core/AngularMaterials/MyOwnCustomMaterialModule'

import { SharedComponents } from './index';

@NgModule({
  declarations: [
    ...SharedComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    MyOwnCustomMaterialModule
  ],
  exports: [
    ...SharedComponents
  ]
})
export class SharedModule {  }