import { Routes } from '@angular/router';
import { RegistrarCamisaComponent } from './components/camisa/registrar/registrar.camisa';
import { CamisaComponent } from './components/camisa/camisa.component';

export const CAMISA_ROUTES: Routes = [
  { path: '', component: CamisaComponent },     // listado de camisa
  { path: 'nuevo', component: RegistrarCamisaComponent } // <- camisa/nuevo
];
