import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { InitPageComponent } from './init-page/init-page.component';
import { ActivityComponent } from './models/modules/activity/activity.component';
import { AnagraficaHandlerComponent } from './models/modules/anagrafica-handler/anagrafica-handler.component';
import { AnagraficaListComponent } from './models/modules/anagrafica-list/anagrafica-list.component';
import { ProjectComponent } from './models/modules/project/project.component';
import { ProjectListComponent } from './models/modules/project-list/project-list.component';
import { TypeActivityComponent } from './models/modules/type-activity/type-activity.component';
import { TypeActivityListComponent } from './models/modules/type-activity-list/type-activity-list.component';
import { TecniciListComponent } from './models/modules/tecnici-list/tecnici-list.component';
import { TecniciComponent } from './models/modules/tecnici/tecnici.component';
import { LoginComponent } from './models/modules/login/login.component';


const routes: Routes = [
  {path:"",redirectTo:'/activity-list',pathMatch:'full'},
  {path:"login", component: LoginComponent},
  {path:"activity-list", component: InitPageComponent},
  {path:"activity", component: ActivityComponent},
  {path:"activity/:identity", component: ActivityComponent},
  {path:"anagrafica", component: AnagraficaHandlerComponent},
  {path:"anagrafica/:identity", component: AnagraficaHandlerComponent},
  {path:"anagrafica-list", component: AnagraficaListComponent},
  {path:"tecnici", component: TecniciComponent},
  {path:"tecnici/:identity", component: TecniciComponent},
  {path:"tecnici-list", component: TecniciListComponent},
  {path:"project", component: ProjectComponent},
  {path:"project/:identity", component: ProjectComponent},
  {path:"project-list", component: ProjectListComponent},
  {path:"type-activity", component: TypeActivityComponent},
  {path:"type-activity/:identity", component: TypeActivityComponent},
  {path:"type-activity-list", component: TypeActivityListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
