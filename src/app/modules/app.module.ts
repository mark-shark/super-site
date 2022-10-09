import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ClickOutsideModule} from "ng-click-outside";

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMenuModule} from "@angular/material/menu";

import {OverlayModule} from "@angular/cdk/overlay";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app/app.component';
import {ToolbarComponent} from "./toolbar/toolbar.componet";
import {ToolbarSettingsComponent} from "./toolbar/toolbar-settings.component";
import {HeaderNavigationComponent} from "./navigation/header-navigation.component";
import {AsideNavigationComponent} from "./navigation/aside-navigation.component";
import {HeaderComponent} from "./header/header.component";
import {DatePipeComponent, FooterComponent} from "./footer/footer.component";
import {PageIndexComponent} from "./routes/pages/page-index.component";
import {PageLoginComponent} from "./routes/pages/page-login.component";
import {PageSiteComponent} from "./routes/pages/page-site.component";
import {PageDashboardComponent} from "./routes/pages/page-dashboard.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ModalDialogComponent} from "./modal-dialog/modal-dialog.component";

import {ColorPickerComponent} from "./color-picker/color-picker.component";
import {NightModeComponent} from "./night-mode/night-mode.component";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarSettingsComponent,
    HeaderNavigationComponent,
    AsideNavigationComponent,
    HeaderComponent,
    FooterComponent,
    DatePipeComponent,
    PageIndexComponent,
    PageLoginComponent,
    PageSiteComponent,
    PageDashboardComponent,
    ModalDialogComponent,
    ColorPickerComponent,
    NightModeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    ClickOutsideModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
