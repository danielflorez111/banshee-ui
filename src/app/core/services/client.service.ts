import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../shared/constants/constants';

@Injectable()
export class ClientService {

  private _apiUrl = apiUrl.clientsUrl;

  constructor(private _http: HttpClient) { }

  getClients() {
    return this._http.get(this._apiUrl);
  }

}
