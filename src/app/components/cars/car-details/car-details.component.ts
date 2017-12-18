import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from './../../../core/services/cars/car.service'
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit, OnDestroy {
  currentCar;
  paramsId: string;
  sub$;
  listPictures = [];
  arrayOfKeys;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private carService: CarService,
    private routeSnap: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.paramsId = this.routeSnap.snapshot.params["id"];
    this.sub$ = this.carService.getCarById(this.paramsId).subscribe(data =>{
    this.currentCar = data;
    this.arrayOfKeys = Object.keys(data['list']).slice(1, data['list'].length);
      this.generateList(this.arrayOfKeys)
    })


    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        previewInfinityMove:true,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnEsc: true,
        previewCloseOnClick: true
      }
    ];
    
    this.galleryImages = this.listPictures

  }

  ngOnDestroy(){
    this.sub$.unsubscribe();
  }

  generateList(arrayOfKeys){
    for(let key of arrayOfKeys){
      
        let obj = {
          small: this.currentCar['list'][key],
          medium: this.currentCar['list'][key],
          big: this.currentCar['list'][key],
      }
      this.listPictures.push(obj)
      
    }
    console.log(this.listPictures)
  }

  

}
