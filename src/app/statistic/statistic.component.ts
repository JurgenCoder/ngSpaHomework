import {Component, Input, OnInit} from '@angular/core';
import {hotels$} from '../mocks/data';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @Input()
  public socialInfo: ISocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
