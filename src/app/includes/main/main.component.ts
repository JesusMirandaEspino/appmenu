import { Component, OnInit } from '@angular/core';
import { ApifoodService  } from 'src/app/services/apifood.service';
import {  FoodResponse,  MenuItem  } from '../../interfaces/foodresponse';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor( private foodServices: ApifoodService  ) { }

  ngOnInit(): void {


    this.foodServices.getfood().subscribe(  (food ) => {

      this.menuItems = food.menuItems;

      console.log(  this.menuItems );
    } );

  }

}
