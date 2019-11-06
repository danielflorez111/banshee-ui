import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../shared/constants/constants';

@Injectable()
export class CityService {

  private _apiUrl = apiUrl.citiesUrl;

  constructor(private _http: HttpClient) { }

  getCities() {
    return this._http.get(this._apiUrl);
  }

}
