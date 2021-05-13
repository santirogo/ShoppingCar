import { Component, OnInit } from '@angular/core';
import {SummaryService} from './summary.service';

@Component({
  selector: 'blacksip-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public service: SummaryService) { }

  ngOnInit(): void {
  }

}
