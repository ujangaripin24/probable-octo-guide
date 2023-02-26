import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageKodePosPage } from './page-kode-pos.page';

const routes: Routes = [
  {
    path: '',
    component: PageKodePosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageKodePosPageRoutingModule {}
