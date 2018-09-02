import { Component } from '@angular/core';
import {hotels$} from './mocks/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ngSpaHomework';
}
