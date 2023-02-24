import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageWeatherPageRoutingModule } from './page-weather-routing.module';

import { PageWeatherPage } from './page-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageWeatherPageRoutingModule
  ],
  declarations: [PageWeatherPage]
})
export class PageWeatherPageModule {}
