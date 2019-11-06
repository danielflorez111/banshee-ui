import { ClientService } from './core/services/client.service';
import { StateService } from './core/services/state.service';
import { SalesRepresentativeService } from './core/services/sales-representative.service';
import { CountryService } from './core/services/country.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { CityService } from './core/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,

    private _cityService: CityService,
    private _CountryService: CountryService,
    private _SalesRepresentativeService: SalesRepresentativeService,
    private _StateService: StateService,
    private _ClientService: ClientService,
  ) {
    this._cityService.getCities().subscribe(r => console.log(r));
    this._CountryService.getCountries().subscribe(r => console.log(r));
    this._SalesRepresentativeService.getSalesRepresentatives().subscribe(r => console.log(r));
    this._StateService.getStates().subscribe(r => console.log(r));
    this._ClientService.getClients().subscribe(r => console.log(r));
  }

}
