import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagraficaListComponent } from './models/modules/anagrafica-list/anagrafica-list.component';
import { AnagraficaHandlerComponent } from './models/modules/anagrafica-handler/anagrafica-handler.component';
import { TopBarComponent } from './models/top-bar/top-bar.component';
import { TypeActivityComponent } from './models/modules/type-activity/type-activity.component';
import { ActivityComponent } from './models/modules/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    AnagraficaListComponent,
    AnagraficaHandlerComponent,
    TopBarComponent,
    TypeActivityComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
