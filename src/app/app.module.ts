import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OthersComponent } from './others/others.component';
import {WeatherService} from './weather.service';
import {RouterModule,Routes} from '@angular/router';
import {HttpClient} from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:HomeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"others",component:OthersComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClient,FormsModule,HttpClient
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
