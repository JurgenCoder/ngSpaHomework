import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input()
  public currentHotel: IHotel;

  @Output()
  public rowClick: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  constructor() { }

  ngOnInit() {
    this._searchCriteria = null;

    this.hotels$.subscribe((places: IHotel[]) => {
      this.currentHotel = places[0];
      this.rowClick.emit(this.currentHotel);
    });
  }

  onFilterClick(filter: string): void {
    this._searchCriteria = filter;
  }

  onRowClick(hotel: IHotel): void {
    this.currentHotel = hotel
    this.rowClick.emit(hotel);
  }

  get searchCriteria(): string {
    return this._searchCriteria;
  }
}
