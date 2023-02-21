import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./../tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./../tab2/tab2.module').then( m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./../tab3/tab3.module').then( m => m.Tab3PageModule)
      },
    ]
  },
  {
    path: '/page-not-found',
    redirectTo : 'page-not-found',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
