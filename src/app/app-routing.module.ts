import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AnimalesComponent } from './animales/animales.component';
//import {EquiposComponent} from './equipos/equipos.component';
const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent},
  { path:'animales', component:AnimalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
