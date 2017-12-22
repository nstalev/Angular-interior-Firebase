import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CarService } from './../../../core/services/cars/car.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2500, noPause: true } }
  ]
})
export class HomeComponent implements OnInit {
  $sub;
  carouselImages;

  constructor(
    private service: CarService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    this.spinnerService.show();
    this.service.getImageforCarousel().subscribe(data =>{
      let arrayOfKeys = Object.keys(data);
      this.carouselImages = arrayOfKeys
      .slice(1, arrayOfKeys.length)
      .map(function (key) {return data[key]})
      this.spinnerService.hide();
    })
  }



}
