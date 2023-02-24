import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCapitalsPageRoutingModule } from './page-capitals-routing.module';

import { PageCapitalsPage } from './page-capitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCapitalsPageRoutingModule
  ],
  declarations: [PageCapitalsPage]
})
export class PageCapitalsPageModule {}
