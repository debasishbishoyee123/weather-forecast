import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
     
  city:string;
  code:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  save(){
    let location={
      city:this.city,
      code:this.code
    };
    localStorage.setItem{key:'location',JSON.stringify(location)}
    this.router.navigate

  }




}
