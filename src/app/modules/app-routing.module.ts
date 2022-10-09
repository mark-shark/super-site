import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageDashboardComponent} from "./routes/pages/page-dashboard.component";
import {PageSiteComponent} from "./routes/pages/page-site.component";
import {PageIndexComponent} from "./routes/pages/page-index.component";
import {PageLoginComponent} from "./routes/pages/page-login.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: PageIndexComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'dashboard', component: PageDashboardComponent },
  { path: 'site-example', component: PageSiteComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
