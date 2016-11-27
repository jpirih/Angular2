/**
 * Created by janko on 25/11/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "../heroes/hero";
import {HeroService} from "../heroes/hero.service";
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){}
  ngOnInit(): void
  {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
}
