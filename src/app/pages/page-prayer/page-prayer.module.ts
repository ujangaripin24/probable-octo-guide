import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePrayerPageRoutingModule } from './page-prayer-routing.module';

import { PagePrayerPage } from './page-prayer.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePrayerPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PagePrayerPage]
})
export class PagePrayerPageModule {}
