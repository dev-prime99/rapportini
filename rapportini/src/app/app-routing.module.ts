import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagraficaHandlerComponent } from './models/modules/anagrafica-handler/anagrafica-handler.component';


const routes: Routes = [
  {path:"",redirectTo:'anagrafica',pathMatch:'full'},
  {path:"anagrafica", component: AnagraficaHandlerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
