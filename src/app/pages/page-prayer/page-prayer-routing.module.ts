import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePrayerPage } from './page-prayer.page';

const routes: Routes = [
  {
    path: '',
    component: PagePrayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePrayerPageRoutingModule {}
