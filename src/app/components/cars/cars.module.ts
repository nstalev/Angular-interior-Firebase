import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';

import { MyOwnCustomMaterialModule } from './../../core/AngularMaterials/MyOwnCustomMaterialModule'


import { CarsComponents } from './index';
import { carPaths } from './cars.routing';

@NgModule({
  declarations: [
    ...CarsComponents,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(carPaths),
    MyOwnCustomMaterialModule,
    NgxPaginationModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgxGalleryModule,
  ],
  exports: [
    ...CarsComponents
  ]
})
export class CarsModule {  }