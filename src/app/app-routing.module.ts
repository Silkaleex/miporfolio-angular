import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'informacion', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
