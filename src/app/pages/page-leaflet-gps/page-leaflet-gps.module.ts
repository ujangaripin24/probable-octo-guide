import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLeafletGPSPageRoutingModule } from './page-leaflet-gps-routing.module';

import { PageLeafletGPSPage } from './page-leaflet-gps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLeafletGPSPageRoutingModule
  ],
  declarations: [PageLeafletGPSPage]
})
export class PageLeafletGPSPageModule {}
