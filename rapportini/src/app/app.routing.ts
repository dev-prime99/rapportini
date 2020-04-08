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
import { AuthGuard } from './guard/AuthGuard';
import { UserComponent } from './models/modules/user/user.component';
import { UserListComponent } from './models/modules/user-list/user-list.component';


const routes: Routes = [
  {path:"",redirectTo:'/activity-list',pathMatch:'full'},
  {path:"login", component: LoginComponent},
  {path:"activity-list", component: InitPageComponent, canActivate: [AuthGuard]},
  {path:"activity", component: ActivityComponent, canActivate: [AuthGuard]},
  {path:"activity/:identity", component: ActivityComponent, canActivate: [AuthGuard]},
  {path:"anagrafica", component: AnagraficaHandlerComponent, canActivate: [AuthGuard]},
  {path:"anagrafica/:identity", component: AnagraficaHandlerComponent, canActivate: [AuthGuard]},
  {path:"anagrafica-list", component: AnagraficaListComponent, canActivate: [AuthGuard]},
  {path:"tecnici", component: TecniciComponent, canActivate: [AuthGuard]},
  {path:"tecnici/:identity", component: TecniciComponent, canActivate: [AuthGuard]},
  {path:"tecnici-list", component: TecniciListComponent, canActivate: [AuthGuard]},
  {path:"project", component: ProjectComponent, canActivate: [AuthGuard]},
  {path:"project/:identity", component: ProjectComponent, canActivate: [AuthGuard]},
  {path:"project-list", component: ProjectListComponent, canActivate: [AuthGuard]},
  {path:"user", component: UserComponent, canActivate: [AuthGuard]},
  {path:"user/:identity", component: UserComponent, canActivate: [AuthGuard]},
  {path:"user-list", component: UserListComponent, canActivate: [AuthGuard]},
  {path:"type-activity", component: TypeActivityComponent, canActivate: [AuthGuard]},
  {path:"type-activity/:identity", component: TypeActivityComponent, canActivate: [AuthGuard]},
  {path:"type-activity-list", component: TypeActivityListComponent, canActivate: [AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
