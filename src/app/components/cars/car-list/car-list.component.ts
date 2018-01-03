import { Component, OnInit, OnDestroy } from '@angular/core';
import { CarService } from './../../../core/services/cars/car.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {
  $sub;
  selectedCategory: string;
  p: number = 1;
  allCars;
  unfilteredData;
  categories;

  constructor(
    private carService: CarService,
    private spinnerService: Ng4LoadingSpinnerService
    
  ) { }

  ngOnInit() {
    this.spinnerService.show();
    this.$sub = this.carService.getallCars().subscribe(data =>{
      this.unfilteredData = Object.keys(data).reverse().map(function (key) { return data[key]; });
      this.allCars = this.unfilteredData;
      console.log(this.unfilteredData)
      this.spinnerService.hide();
    })

    this.selectedCategory = 'всички';
    this.categories = [
      {value: 'всички', viewValue: 'Всички'},
      {value: 'волан', viewValue: 'Волан'},
      {value: 'салон', viewValue: 'Салон'},
      {value: 'табло', viewValue: 'Табло'},
      {value: 'друго', viewValue: 'Друго'},
    ]
  }

  ngOnDestroy(){
    this.$sub.unsubscribe();
  }

  filterDataByCategory(){
    if(this.selectedCategory == 'всички'){
      this.allCars = this.unfilteredData
    }else{
      this.allCars = this.unfilteredData.filter(a => a.category == this.selectedCategory)
    }

  }

}
