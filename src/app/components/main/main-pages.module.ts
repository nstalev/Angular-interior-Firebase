import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FacebookModule } from 'ngx-facebook';

import { MyOwnCustomMaterialModule } from './../../core/AngularMaterials/MyOwnCustomMaterialModule'


import { MainComponents } from './index';

@NgModule({
  declarations: [
    ...MainComponents,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXmkNAF7T5GhOKVxR3I0BsGo6-2AYYQUM'
    }),
    MyOwnCustomMaterialModule,
    CarouselModule,
    FacebookModule.forRoot()
  ],
  exports: [
    ...MainComponents
  ]
})
export class MainPagesModule {  }