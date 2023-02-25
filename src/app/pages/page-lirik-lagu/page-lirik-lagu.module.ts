import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageLirikLaguPageRoutingModule } from './page-lirik-lagu-routing.module';

import { PageLirikLaguPage } from './page-lirik-lagu.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageLirikLaguPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PageLirikLaguPage]
})
export class PageLirikLaguPageModule {}
