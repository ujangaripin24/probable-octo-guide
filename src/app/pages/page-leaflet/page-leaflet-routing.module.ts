import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLeafletPage } from './page-leaflet.page';

const routes: Routes = [
  {
    path: '',
    component: PageLeafletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLeafletPageRoutingModule {}
