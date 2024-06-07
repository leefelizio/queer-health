import { Routes } from '@angular/router';
import { DetailComponent } from './containers/detail/detail.component';
import { isAuthGuard } from './guards/is-auth.guard';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { LoginComponent } from './containers/login/login.component';
import { TabsComponent } from './containers/tabs/tabs.component';

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
          loadComponent: () => import('./containers/home/home.component').then(m => m.HomeComponent)
        },
        {
          path: 'doctors',
          loadComponent: () => import('./containers/doctors/doctors.component').then(m => m.DoctorsComponent)
        },
        {
          path: 'favorites',
          loadComponent: () => import('./containers/favorites/favorites.component').then(m => m.FavoritesComponent),
          canActivate: [isAuthGuard],
        },
      ],
    },
    {
      path: 'login',
      component: LoginComponent,

    },
    {
      path: 'professional',
      children: [
        {
          path: ':uuid',
          component: DetailComponent
        }
      ],
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
