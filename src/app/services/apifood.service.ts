import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifoodService {

  apiEspenocular = '9a31b7bf6ff94359885c50e84ecee992';
  url = 'https://api.spoonacular.com/food/menuItems/search?query=burger&number=2&apiKey=9a31b7bf6ff94359885c50e84ecee992';


  // https://spoonacular.com/food-api/docs#Search-Menu-Items
  // query valor buscado
  // number cantidad a mostrar
  // apiKey clave de acceso a la API

  constructor() { }
}
