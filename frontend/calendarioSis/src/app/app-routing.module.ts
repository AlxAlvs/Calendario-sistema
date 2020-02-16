import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioListarComponent } from './calendarios/calendario-listar.component';


const routes: Routes = [
  {path: 'calendarios', component: CalendarioListarComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
