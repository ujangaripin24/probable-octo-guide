import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ExampleComponent } from './example/example.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ExampleComponent,
        children: [
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'add-new-task',
            loadChildren: () => import('./add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
          },
          {
            path: 'tab1',
            loadChildren: () => import('./pages/tab1/tab1.module').then( m => m.Tab1PageModule)
          },
          {
            path: 'leaflet',
            loadChildren: () =>  import ('./pages/page-leaflet/page-leaflet.module').then( m => m.PageLeafletPageModule)
          },
          {
            path: 'pageLirikLagu',
            loadChildren: () => import('./pages/page-lirik-lagu/page-lirik-lagu.module').then(m => m.PageLirikLaguPageModule)
          },
          {
            path: 'pagePrayer',
            loadChildren: () => import('./pages/page-prayer/page-prayer.module').then(m => m.PagePrayerPageModule)
          },
          {
            path: 'pageKodePos',
            loadChildren: () => import('./pages/page-kode-pos/page-kode-pos.module'). then(m => m.PageKodePosPageModule)
          }
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
