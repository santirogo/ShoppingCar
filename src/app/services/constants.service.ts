import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public PROPERTIES_FILE_URL = 'assets/config/config.json';
  public BASE_URL = 'https://blackisp.herokuapp.com/';
  public GET_PRODUCTS_URL = 'products';
  public GET_POSTAL_CODES_URL = 'postalCodes';
  public GET_CONTACT_URL = 'contact';
  public POSTAL_CODE_INDEX = 4;

  constructor() { }
}
