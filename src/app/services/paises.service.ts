import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { Pais } from "../models/paises";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  resourceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'https://restcountries.com/v2/all';
  }

  getPaises() {
    return this.httpClient.get(this.resourceUrl);
  }

}
