import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ngSpaHomework';
  public currentHotel;

  onTourRowClick(hotel: IHotel): void {
    this.currentHotel = hotel;
  }
}
