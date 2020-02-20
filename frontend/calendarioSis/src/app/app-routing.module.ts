import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioListarComponent } from './calendarios/calendario-listar.component';
import { CalendarioFormComponent } from './calendarios/calendario-form/calendario-form.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'calendarios', component: CalendarioListarComponent},
  {path: 'cadastrar', component: CalendarioFormComponent},
  {path: 'alterar/:id', component: CalendarioFormComponent},
  {path: 'cadastro-usuario', component: LoginFormComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
