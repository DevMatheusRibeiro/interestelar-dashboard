import { Routes } from '@angular/router';

import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
        data: { pageTitle: 'Dashboard' }
      },
    ],
  },
];
