import {Routes} from '@angular/router';
import {MainLayoutComponent} from './layout/components/main-layout/main-layout';
import {DashboardComponent} from './features/dashboard/dashboard';
import {AuthGuard} from './core/auth/guards/auth.guard';
import {CamisaComponent} from './features/camisa/components/camisa/camisa.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'camisa', component: CamisaComponent},
      { //mapear nueva camisa
        path: 'camisa',
        loadChildren: () =>
          import('./features/camisa/camisa.routes').then(m => m.CAMISA_ROUTES)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/authentication/authentication.routes').then(m => m.AUTH_ROUTES)
  },
  {path: '**', redirectTo: ''}
];
