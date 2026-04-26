import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'snippet/:id',
    loadComponent: () => import('./pages/snippet-detail/snippet-detail.component').then(m => m.SnippetDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
