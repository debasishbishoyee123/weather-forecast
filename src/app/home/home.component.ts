import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location={
    city:'london',
    code:'uk'
  };

   public weather:any;
   public value:any;

  constructor(private weatherservice:WeatherService ) { }

  ngOnInit() {
      this.value=localStorage.getItem{'location'};
      if(this.value!=null){
        this.location=JSON.parse(this.value)
      }else{
        this.location={
          city:'london',
          code:'uk'
        };
      }

    this.weatherservice.getweather(this.location.city,this.location.code).map((response)=>{
      console.log(response);
      this.weather=response;      
    })
  }

}
