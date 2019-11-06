import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../shared/constants/constants';

@Injectable()
export class StateService {

  private _apiUrl = apiUrl.statesUrl;

  constructor(private _http: HttpClient) { }

  getStates() {
    return this._http.get(this._apiUrl);
  }

}
