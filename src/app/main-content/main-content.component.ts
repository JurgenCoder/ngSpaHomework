import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output()
  public rowClick: EventEmitter<IHotel> = new EventEmitter<IHotel>();

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

  onRowClick(hotel: IHotel): void {
    this.rowClick.emit(hotel);
  }

  get searchCriteria(): string {
    return this._searchCriteria;
  }
}
