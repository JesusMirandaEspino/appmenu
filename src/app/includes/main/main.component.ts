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




  }


  buscar(food: string): void{

    this.foodServices.getfood(food).subscribe(  (food ) => {

      this.menuItems = food.menuItems;

      console.log(  'hola' );
    } );

  }


  starNumber(  id: number ): number {
    const star = id  / 100000;
    const resultstar =  Math.round(star);
    return resultstar;

  }


}
