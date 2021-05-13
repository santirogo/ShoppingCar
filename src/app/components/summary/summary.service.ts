import { Injectable } from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {Summary} from '../../models/config.model';
import {RestService} from '../../services/rest.service';
import {ItemModel} from '../../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  public summaryConfig: Summary;
  public items: ItemModel[];

  constructor(private configService: ConfigService, private rest: RestService) {
    this.getConfigProperties();
    this.getItems();
  }

  private getConfigProperties(): void {
    this.configService.getAppPropertiesFile().subscribe((config) => {
      this.summaryConfig = config.Summary;
    });
  }

  private getItems(): void {
    this.rest.getItems().subscribe((items) => {
      this.items = items;
    }, (error) => {
      console.error(error);
    });
  }
}
