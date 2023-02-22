import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLeafletPageRoutingModule } from './page-leaflet-routing.module';

import { PageLeafletPage } from './page-leaflet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLeafletPageRoutingModule
  ],
  declarations: [PageLeafletPage]
})
export class PageLeafletPageModule {}
