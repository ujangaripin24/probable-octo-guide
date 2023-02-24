import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageWeatherPage } from './page-weather.page';

const routes: Routes = [
  {
    path: '',
    component: PageWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWeatherPageRoutingModule {}
