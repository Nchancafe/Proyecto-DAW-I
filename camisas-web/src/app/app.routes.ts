import {Routes} from '@angular/router';
import {MainLayoutComponent} from './layout/components/main-layout/main-layout';
import {DashboardComponent} from './features/dashboard/dashboard';
import {AuthGuard} from './core/auth/guards/auth.guard';
import {CamisaComponent} from './features/camisa/components/camisa/camisa.component';
import {MarcaComponent} from './features/marca/components/marca/marca.component';
import {PerfilUsuarioComponent} from './features/perfil-usuario/components/usuario/perfil-usuario.component';


export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'camisa', component: CamisaComponent},
      { path: 'marca', component: MarcaComponent },
      {path: 'perfil-usuario', component: PerfilUsuarioComponent, title: 'Mi Perfil'},

    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/authentication/authentication.routes').then(m => m.AUTH_ROUTES)
  },
  {path: '**', redirectTo: ''}
];
