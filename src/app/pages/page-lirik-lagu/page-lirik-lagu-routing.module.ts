import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLirikLaguPage } from './page-lirik-lagu.page';

const routes: Routes = [
  {
    path: '',
    component: PageLirikLaguPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLirikLaguPageRoutingModule {}
