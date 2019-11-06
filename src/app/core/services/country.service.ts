import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../shared/constants/constants';

@Injectable()
export class CountryService {

  private _apiUrl = apiUrl.countriesUrl;

  constructor(private _http: HttpClient) { }

  getCountries() {
    return this._http.get(this._apiUrl);
  }

}
