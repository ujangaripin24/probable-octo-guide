import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSettingPage } from './page-setting.page';

const routes: Routes = [
  {
    path: '',
    component: PageSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSettingPageRoutingModule {}
