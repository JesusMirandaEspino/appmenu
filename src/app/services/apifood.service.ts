import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifoodService {

  apiKey = '7e10d42d6c3d73d1d9c1e3e010abec0a';
  apiId = '743996d6';
  apiStatus = 'live';
  apiPlan = 'Developer';
  apiEspenocular = '9a31b7bf6ff94359885c50e84ecee992';
  url = 'https://api.spoonacular.com/food/menuItems/search?query=burger&number=2&apiKey=9a31b7bf6ff94359885c50e84ecee992';

  // query valor buscado
  // number cantidad a mostrar
  // apiKey clave de acceso a la API

  constructor() { }
}
