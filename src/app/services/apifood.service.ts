import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError }  from 'rxjs/operators';
import {  FoodResponse  } from '../interfaces/foodresponse';

@Injectable({
  providedIn: 'root'
})
export class ApifoodService {

  apiEspenocular = '9a31b7bf6ff94359885c50e84ecee992';
  private baseUrl = 'https://api.spoonacular.com/food/menuItems/search?query=burger&number=2&apiKey=9a31b7bf6ff94359885c50e84ecee992';


  // https://spoonacular.com/food-api/docs#Search-Menu-Items
  // query valor buscado
  // number cantidad a mostrar
  // apiKey clave de acceso a la API

  constructor( private http: HttpClient  ) { }


  /* get params () {
    return {
      api_key: '590eb4dce046e2f09c91e191b2811e87',
      language: 'es-Es',
      page: this.cateleraPage.toString()

    }


  }*/

getfood(): Observable< FoodResponse[]>  {
  return this.http.get< FoodResponse[]>( this.baseUrl ).pipe( map( resp => resp ), catchError(err => of([]) ) );
}



}
