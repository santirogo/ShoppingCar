import { Component, OnInit, Input } from '@angular/core';
import {ItemModel} from '../../../models/item.model';

@Component({
  selector: 'blacksip-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: ItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
