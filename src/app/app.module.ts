import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { ComponentCommService } from './service/componentComm.service';

import { AppComponent } from './app.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLeftComponent,
    MainContentComponent,
    TreeNodeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    ComponentCommService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
