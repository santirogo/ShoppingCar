import { Injectable } from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {DeliveryAddress} from '../../models/config.model';


@Injectable({
  providedIn: 'root'
})
export class DeliveryAddressService {

  public deliveryAddressConfig: DeliveryAddress;

  constructor(private configService: ConfigService) {
    this.getConfigProperties();
  }

  private getConfigProperties(): void {
    this.configService.getAppPropertiesFile().subscribe((config) => {
      this.deliveryAddressConfig = config.DeliveryAddress;
    });
  }
}
