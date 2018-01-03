import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {

  constructor(
    private http : HttpClient,
  ) { }

  getImageforCarousel(): Observable<Object> {
    const url = "https://kostadinov-design-c810b.firebaseio.com/carousel.json"
    return this.http.get<Object>(url) 
  }

  getallCars(): Observable<Object> {
    const url = "https://kostadinov-design-c810b.firebaseio.com/allCars.json"
    return this.http.get<Object>(url)

  }


  getCarById(id){
    const url = `https://kostadinov-design-c810b.firebaseio.com/allCars/${id}.json`
    return this.http.get<Object>(url)
  }

}
