import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-maharashtrian-festivals-list',
  templateUrl: './maharashtrian-festivals-list.page.html',
  styleUrls: ['./maharashtrian-festivals-list.page.scss'],
})
export class MaharashtrianFestivalsListPage implements OnInit {

  isDataAvailable = false;
  festivalsList = [];

  constructor(
    private sidebar: MenuController
  ) { }

  ngOnInit() {
    this.getFestivalsList();   
  }

  ionViewWillEnter() {
    this.sidebar.enable(true);
  }

  getFestivalsList() {
    this.festivalsList = [
      { id: 1, name: 'abc' },
      { id: 2, name: 'xyz' }
    ];
    this.isDataAvailable = true;
  }

}
