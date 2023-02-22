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
            path: 'tab2',
            loadChildren: () => import('./pages/tab2/tab2.module').then( m => m.Tab2PageModule)
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
