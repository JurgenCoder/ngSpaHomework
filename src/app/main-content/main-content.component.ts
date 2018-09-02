import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {hotels$} from '../mocks/data';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  public hotels$: Observable<IHotel[]> = hotels$;
  private _searchCriteria;

  constructor() { }

  ngOnInit() {
    this._searchCriteria = null;
  }

  onHotelClick(): void {
    this._searchCriteria = 'hotel';
  }

  onFishingCkick(): void {
    this._searchCriteria = 'fishing';
  }

  onToursClick(): void {
    this._searchCriteria = 'tours';
  }

  onWeatherClick(): void {
    this._searchCriteria = 'weather';
  }

  get searchCriteria(): string {
    return this._searchCriteria;
  }
}
