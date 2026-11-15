
import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { LoginComponent } from './features/login/login';
import { CartaComponent } from './features/carta/carta';
import { RegistroComponent } from './features/registro/registro';
import { MiCuentaComponent } from './features/mi_cuenta/mi_cuenta';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'mi_cuenta', component: MiCuentaComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'home' },
  

];
