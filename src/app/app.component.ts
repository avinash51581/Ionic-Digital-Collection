import { Component } from '@angular/core';
import { AppConstants } from './infrastructure/app.constant';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = AppConstants.applicationPages;

  constructor() {}
}
