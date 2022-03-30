import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaharashtrianFestivalsPageRoutingModule } from './maharashtrian-festivals-list-routing.module';

import { MaharashtrianFestivalsListPage } from './maharashtrian-festivals-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaharashtrianFestivalsPageRoutingModule
  ],
  declarations: [MaharashtrianFestivalsListPage]
})
export class MaharashtrianFestivalsPageModule {}
