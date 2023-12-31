import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'administracion', component: AdministrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
