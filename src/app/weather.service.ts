import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
   
    apikey='2d4f8c920df76797930cbb16cea966a4';
    url;


  constructor(private http:HttpClient) { 
    this.url='http://api.openweathermap.org/data/2.5/forecast?q='
  }
    getweather(city,code){
      const newLocal = this.url + city + ',' + code + '&APPID=' + this.apikey;
      return this.http.get(this.url=newLocal).subscribe{(response)=>{
        response.json();

      }};
    }





}
