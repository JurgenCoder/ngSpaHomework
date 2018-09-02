import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { WeatherComponent } from './weather/weather.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TourFilterPipe } from './pipes/tour-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    WeatherComponent,
    StatisticComponent,
    TourFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
