import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageSettingPageRoutingModule } from './page-setting-routing.module';

import { PageSettingPage } from './page-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageSettingPageRoutingModule
  ],
  declarations: [PageSettingPage]
})
export class PageSettingPageModule {}
