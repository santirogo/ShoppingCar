import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConstantsService} from './constants.service';
import {FormRequestModel} from '../models/form-request.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient, private constants: ConstantsService) { }

  public getItems(): Observable<any> {
    return this.httpClient.get(this.constants.BASE_URL + this.constants.GET_PRODUCTS_URL);
  }

  public getLocationInfo(postalCode: string): Observable<any> {
    return this.httpClient.get(this.constants.BASE_URL + this.constants.GET_POSTAL_CODES_URL + '/' + postalCode);
  }

  public sendContactInfo(data: FormRequestModel): Observable<any> {
    return this.httpClient.post<FormRequestModel>(this.constants.BASE_URL + this.constants.GET_CONTACT_URL, data);
  }
}
