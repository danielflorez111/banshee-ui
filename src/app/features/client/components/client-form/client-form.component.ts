import { ClientService } from './../../../../core/services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from './../../../../core/services/country.service';
import { StateService } from './../../../../core/services/state.service';
import { CityService } from './../../../../core/services/city.service';
import { ICountry } from './../../../../core/interfaces/country.interface';
import { IState } from './../../../../core/interfaces/state.interface';
import { ICity } from './../../../../core/interfaces/city.interface';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  clientForm: FormGroup;
  countries: ICountry[];
  states: IState[];
  cities: ICity[];

  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _countryService: CountryService,
    private _stateService: StateService,
    private _cityService: CityService,
    private _clientService: ClientService,
  ) { }

  ngOnInit() {
    this.getCountries();
    this.getStates();
    this.getCities();
    this.buildForm();
  }

  buildForm() {
    this.clientForm = this.fb.group({
      nit: ['', Validators.required],
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      creditLimit: ['', Validators.required],
      availableCredit: ['', Validators.required],
      visitsPercentage: ['', Validators.required],
    });
  }

  getCountries() {
    this._countryService.getCountries().subscribe((data: ICountry[]) => {
      this.countries = data;
    });
  }

  getStates() {
    this._stateService.getStates().subscribe((data: IState[]) => {
      this.states = data;
    });
  }

  getCities() {
    this._cityService.getCities().subscribe((data: ICity[]) => {
      this.cities = data;
    });
  }

  onSubmit() {
    let client = { ...this.clientForm.value };
    client.cityId = client.city;

    delete client.country;
    delete client.state;
    delete client.city;

    this._clientService.createClient(client).subscribe(response => {
      this._router.navigate(['']);
    });
  }
}
