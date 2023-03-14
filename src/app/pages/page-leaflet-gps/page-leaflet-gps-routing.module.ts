import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLeafletGPSPage } from './page-leaflet-gps.page';

const routes: Routes = [
  {
    path: '',
    component: PageLeafletGPSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLeafletGPSPageRoutingModule {}
