import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){}

  getCarouselData(){
    return this.http.get(environment.url + 'carousel-data.json');
  }

  getSeriesData(){
    return this.http.get(environment.url + 'series.json');
  }

  getActorsData(){
    return this.http.get(environment.url + 'actors-data.json');
  }
}
