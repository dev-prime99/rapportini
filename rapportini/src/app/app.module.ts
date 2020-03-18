
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
// import { FullComponent } from './layouts/full/full.component';
// import { AppHeaderComponent } from './layouts/full/header/header.component';
// import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import { InitPageComponent } from './init-page/init-page.component';
import { TopBarComponent } from './models/top-bar/top-bar.component';
import { ActivityListComponent } from './models/modules/activity-list/ActivityListComponent';
import { ActivityComponent } from './models/modules/activity/activity.component';
import { AnagraficaHandlerComponent } from './models/modules/anagrafica-handler/anagrafica-handler.component';
import { AnagraficaListComponent } from './models/modules/anagrafica-list/anagrafica-list.component';
import { ProjectComponent } from './models/modules/project/project.component';
import { ProjectListComponent } from './models/modules/project-list/project-list.component';
import { TypeActivityComponent } from './models/modules/type-activity/type-activity.component';
import { TypeActivityListComponent } from './models/modules/type-activity-list/type-activity-list.component';


@NgModule({
  declarations: [
    AppComponent,
    // FullComponent,
    // AppHeaderComponent,
    SpinnerComponent,
    // AppSidebarComponent,
    InitPageComponent,
    TopBarComponent,
    ActivityComponent,
    ActivityListComponent,
    AnagraficaHandlerComponent,
    AnagraficaListComponent,
    ProjectComponent,
    ProjectListComponent,
    TypeActivityComponent,
    TypeActivityListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    AppRoutes,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
