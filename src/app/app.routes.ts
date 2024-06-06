import { Routes } from '@angular/router';
import { dataResolver } from './resolvers/data.resolver';
import { DetailComponent } from './containers/detail/detail.component';
import { FavoritesComponent } from './containers/favorites/favorites.component';
import { isAuthGuard } from './guards/is-auth.guard';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { isNotAuthGuard } from './guards/is-not-auth.guard';
import { TabsComponent } from './containers/tabs/tabs.component';
import { Tab1Component } from './containers/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
    {
      path: '',
      component: TabsComponent,
      children: [
        {
          path: 'home',
          loadComponent: () => import('./containers/home/home.component').then(m => m.Tab1Component)
        },
        {
          path: 'doctors',
          loadComponent: () => import('./containers/doctors/doctors.component').then(m => m.DoctorsComponent)
        },
        {
          path: 'favorites',
          loadComponent: () => import('./containers/favorites/favorites.component').then(m => m.FavoritesComponent),
          canLoad: [isAuthGuard],

        },
      ],
    },
    {
      path: 'professional',
      children: [
        {
          path: ':uuid',
          component: DetailComponent
        }
      ],
      canActivate: [isAuthGuard],
    },
    {
      path: 'login',
      component: LoginPageComponent,
      canActivate: [isNotAuthGuard],

    },
    {
      path: '404',
      component: NotFoundComponent
    },
    {
      // all other routes go to 404
      path: '**',
      redirectTo: '404',
      pathMatch: 'full'
    },
  ];
