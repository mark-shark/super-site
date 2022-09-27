import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {ClickOutsideModule} from "ng-click-outside";

import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app/app.component';
import {ToolbarComponent} from "./toolbar/toolbar.componet";
import {HeaderNavigationComponent} from "./navigation/header-navigation.component";
import {AsideNavigationComponent} from "./navigation/aside-navigation.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {IndexComponent} from "./routes/pages/intro.component";
import {SiteComponent} from "./routes/pages/site.component";
import {DashboardComponent} from "./routes/pages/dashboard.component";



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderNavigationComponent,
    AsideNavigationComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SiteComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
