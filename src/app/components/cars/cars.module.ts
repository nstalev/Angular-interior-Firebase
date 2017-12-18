import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatButtonModule} from '@angular/material/button';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { CarsComponents } from './index';
import { carPaths } from './cars.routing';

@NgModule({
  declarations: [
    ...CarsComponents
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(carPaths),
    MatCardModule,
    MatSelectModule,
    NgxPaginationModule,
    MatButtonModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
  ],
  exports: [
    ...CarsComponents
  ]
})
export class CarsModule {  }