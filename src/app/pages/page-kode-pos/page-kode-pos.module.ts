import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageKodePosPageRoutingModule } from './page-kode-pos-routing.module';

import { PageKodePosPage } from './page-kode-pos.page';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageKodePosPageRoutingModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  declarations: [PageKodePosPage]
})
export class PageKodePosPageModule {}
