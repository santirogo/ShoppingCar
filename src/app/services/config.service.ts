import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ConstantsService} from './constants.service';
import {ConfigModel} from '../models/config.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient, private constants: ConstantsService) {}

  /**
   * @description This function sets the configuration used in the app.
   */
  public getAppPropertiesFile(): Observable<ConfigModel> {
    return this.httpClient.get<ConfigModel>(this.constants.PROPERTIES_FILE_URL);
  }
}
