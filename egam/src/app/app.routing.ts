import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { StarterComponent } from './starter/starter.component';
import { FullComponent } from './layouts/full/full.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
export const AppRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
  { path: '', component: FullComponent, children: [
    { path: 'paciente', component: PacienteComponent},
    { path: 'starter', component: StarterComponent},
      // { path: '', redirectTo: '/starter', pathMatch: 'full' },
      // { path: 'paciente', component: PacienteComponent },
      // { path: 'starter', component: StarterComponent }
]
}];
export const routing = RouterModule.forRoot(AppRoutes);
