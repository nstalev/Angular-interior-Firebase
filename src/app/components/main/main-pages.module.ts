import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';

import { MainComponents } from './index';

@NgModule({
  declarations: [
    ...MainComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXmkNAF7T5GhOKVxR3I0BsGo6-2AYYQUM'
    }),
    MatButtonModule,
   
  ],
  exports: [
    ...MainComponents
  ]
})
export class MainPagesModule {  }