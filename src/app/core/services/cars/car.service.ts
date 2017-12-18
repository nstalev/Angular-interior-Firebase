import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {

  constructor(
    private http : HttpClient,
  ) { }

  getallCars(): Observable<Object> {
    const url = "https://cardesign-17fd8.firebaseio.com/allcars.json"
    return this.http.get<Object>(url)

  }

}
