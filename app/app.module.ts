
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroComponent }  from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail-component';
import {HeroService} from "./heroes/hero.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./data/in-memory-data.service";
import {HeroSearchComponent} from "./shared/hero-search.component";

import './rxjs-extentions';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
