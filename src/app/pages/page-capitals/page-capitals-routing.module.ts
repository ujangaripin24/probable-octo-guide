import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCapitalsPage } from './page-capitals.page';

const routes: Routes = [
  {
    path: '',
    component: PageCapitalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCapitalsPageRoutingModule {}
