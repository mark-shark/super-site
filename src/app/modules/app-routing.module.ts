import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./routes/pages/dashboard.component";
import {SiteComponent} from "./routes/pages/site.component";
import {IndexComponent} from "./routes/pages/intro.component";

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'site-example', component: SiteComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
