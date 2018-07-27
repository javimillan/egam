import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { StarterComponent } from './starter/starter.component';
import { FullComponent } from './layouts/full/full.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
export const AppRoutes: Routes = [
  // { path: '', component: StarterComponent, canActivate: [AuthGuard] },
  { path: '', component: FullComponent, canActivate: [AuthGuard], children: [
  { path: '', component: StarterComponent},
  { path: 'starter', component: StarterComponent},
  { path: 'paciente', component: PacienteComponent},
]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];
export const routing = RouterModule.forRoot(AppRoutes);
