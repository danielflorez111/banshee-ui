import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../shared/constants/constants';

@Injectable()
export class SalesRepresentativeService {

  private _apiUrl = apiUrl.salesRepresentativesUrl;

  constructor(private _http: HttpClient) { }

  getSalesRepresentatives() {
    return this._http.get(this._apiUrl);
  }

}
