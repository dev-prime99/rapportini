
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, forwardRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
// import { FullComponent } from './layouts/full/full.component';
// import { AppHeaderComponent } from './layouts/full/header/header.component';
// import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import {MatDialogModule} from "@angular/material";

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import { InitPageComponent } from './init-page/init-page.component';
import { TopBarComponent } from './models/top-bar/top-bar.component';
import { ActivityListComponent, ActivityListDialog } from './models/modules/activity-list/ActivityListComponent';
import { ActivityComponent } from './models/modules/activity/activity.component';
import { AnagraficaHandlerComponent } from './models/modules/anagrafica-handler/anagrafica-handler.component';
import { AnagraficaListComponent, AnagraficaListDialog, AnagraficaCheckDialog } from './models/modules/anagrafica-list/anagrafica-list.component';
import { ProjectComponent } from './models/modules/project/project.component';
import { ProjectListComponent, ProjectListDialog, ProjectCheckDialog } from './models/modules/project-list/project-list.component';
import { TypeActivityComponent } from './models/modules/type-activity/type-activity.component';
import { TypeActivityListComponent, TypeActivityListDialog, TypeActivityCheckDialog } from './models/modules/type-activity-list/type-activity-list.component';
import { TecniciComponent } from './models/modules/tecnici/tecnici.component';
import { TecniciListComponent, TecniciListDialog } from './models/modules/tecnici-list/tecnici-list.component';
import { ApiModule } from './api/api.module';
import { LoginComponent } from './models/modules/login/login.component';
import { environment } from '../environments/environment';
import { ApiInterceptor } from './shared/ApiInterceptor';
import { AuthGuard } from './guard/AuthGuard';
import { UserComponent } from './models/modules/user/user.component';
import { UserListComponent, UserListDialog } from './models/modules/user-list/user-list.component';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};


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
    TypeActivityListComponent,
    ActivityListDialog,
    AnagraficaListDialog,
    AnagraficaCheckDialog,
    ProjectListDialog,
    ProjectCheckDialog,
    TypeActivityListComponent,
    TypeActivityListDialog,
    TypeActivityCheckDialog,
    TecniciComponent,
    TecniciListComponent,
    TecniciListDialog,
    LoginComponent,
    UserComponent,
    UserListComponent,
    UserListDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    AppRoutes,
    DemoMaterialModule,
    MatDialogModule,
    ReactiveFormsModule,
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
  ],
  entryComponents: [
    ActivityListComponent,
    ActivityListDialog,
    AnagraficaListComponent,
    AnagraficaListDialog,
    AnagraficaCheckDialog,
    ProjectComponent,
    ProjectListDialog,
    ProjectCheckDialog,
    TypeActivityListComponent,
    TypeActivityListDialog,
    TypeActivityCheckDialog,
    TecniciListComponent,
    TecniciListDialog,
    UserListComponent,
    UserListDialog
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    AuthGuard,
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [
    AppComponent,
    ActivityListDialog,
    AnagraficaListDialog,
    AnagraficaCheckDialog,
    ProjectListDialog,
    ProjectCheckDialog,
    TypeActivityListDialog,
    TypeActivityCheckDialog,
    TecniciListDialog,
    UserListDialog
  ],
})
export class AppModule {}
