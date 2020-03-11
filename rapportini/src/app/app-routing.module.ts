import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagraficaHandlerComponent } from './models/modules/anagrafica-handler/anagrafica-handler.component';
import { AnagraficaListComponent } from './models/modules/anagrafica-list/anagrafica-list.component';
import { ActivityComponent } from './models/modules/activity/activity.component';
import { InitPageComponent } from './init-page/init-page.component';
import { TypeActivityComponent } from './models/modules/type-activity/type-activity.component';
import { TypeActivityListComponent } from './models/modules/type-activity-list/type-activity-list.component'
import { ProjectComponent } from './models/modules/project/project.component';
import { ProjectListComponent } from './models/modules/project-list/project-list.component';


const routes: Routes = [
  {path:"",redirectTo:'/activity-list',pathMatch:'full'},
  {path:"activity", component: ActivityComponent},
  {path:"activity/:identity", component: ActivityComponent},
  {path:"activity-list", component: InitPageComponent},
  {path:"anagrafica", component: AnagraficaHandlerComponent},
  {path:"anagrafica/:identity", component: AnagraficaHandlerComponent},
  {path:"anagrafica-list", component: AnagraficaListComponent},
  {path:"type-activity", component: TypeActivityComponent},
  {path:"type-activity-list", component: TypeActivityListComponent},
  {path:"project", component: ProjectComponent},
  {path:"project-list", component: ProjectListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
