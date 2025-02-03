// Crear el servicio con el snippet a-service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Necesario para trabajar con Observables
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
// Cambiar el nombre del servicio y la URL del API
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  // En el constructor se injecta HttpClient para realizar peticiones HTTP (recordar que se debe instalar provideHttpClient() como provider, en el app.module.ts)
  constructor(private http: HttpClient) { }

  // Cuando se busca un país por la capital, se realiza una petición GET a la URL del API de la capital
  // Devolverá un Observable de un array de países. Recordar que los observables se utilizan para manejar la asincronía de las llamadas HTTP (similares a Promises)
  // Se configura la URL para buscar un país por su capital con el termino buscado
  // La respuesta de la API será un array de países en formato JSON
  searchCapital( term: string ): Observable<Country[]> {

    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>( url );
  }

}
