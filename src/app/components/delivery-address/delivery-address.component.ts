import { Component, OnInit } from '@angular/core';
import {DeliveryAddressService} from './delivery-address.service';


@Component({
  selector: 'blacksip-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {

  constructor(public service: DeliveryAddressService) {
  }

  ngOnInit(): void {
  }

}
