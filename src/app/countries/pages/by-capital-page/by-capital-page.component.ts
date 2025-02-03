import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  // El constructor se inyecta el servicio de países
  constructor(private countriesService: CountriesService) { }

  searchByCapital( term: string): void {
    // Se realiza una petición al servicio para buscar un país por su capital
    // El observable neceita ser subscrito para recibir la respuesta
    // La respuesta es procesada y se almacenan en el array de países
    this.countriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
    });
  }
}
