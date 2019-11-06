import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services
import { CityService } from './services/city.service';
import { ClientService } from './services/client.service';
import { CountryService } from './services/country.service';
import { SalesRepresentativeService } from './services/sales-representative.service';
import { StateService } from './services/state.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CityService,
    ClientService,
    CountryService,
    SalesRepresentativeService,
    StateService
  ]
})
export class CoreModule { }
