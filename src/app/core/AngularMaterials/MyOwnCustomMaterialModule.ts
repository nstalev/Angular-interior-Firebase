import { NgModule } from "@angular/core";

import {
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule
],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule
],
})
export class MyOwnCustomMaterialModule { }