import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagraficaListComponent } from './models/modules/anagrafica-list/anagrafica-list.component';
import { AnagraficaHandlerComponent } from './models/modules/anagrafica-handler/anagrafica-handler.component';
import { TopBarComponent } from './models/top-bar/top-bar.component';
import { TypeActivityComponent } from './models/modules/type-activity/type-activity.component';
import { ActivityComponent } from './models/modules/activity/activity.component';
import { InitPageComponent } from './init-page/init-page.component';
import { ProjectComponent } from './models/modules/project/project.component';
import { ActivityListComponent } from './models/modules/activity-list/activity-list.component';
import { ProjectListComponent } from './models/modules/project-list/project-list.component';
import { TypeActivityListComponent } from './models/modules/type-activity-list/type-activity-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnagraficaListComponent,
    AnagraficaHandlerComponent,
    TopBarComponent,
    TypeActivityComponent,
    ActivityComponent,
    InitPageComponent,
    ProjectComponent,
    ActivityListComponent,
    ProjectListComponent,
    TypeActivityListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
