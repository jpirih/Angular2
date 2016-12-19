/**
 * Created by janko on 17/12/2016.
 */
//modules
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

//components
import {HeroComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./heroes/hero-detail-component";

// routes
const appRoutes: Routes = [
  {path: 'heroes', component: HeroComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
