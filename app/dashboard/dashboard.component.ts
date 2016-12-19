/**
 * Created by janko on 25/11/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "../heroes/hero";
import {HeroService} from "../heroes/hero.service";
@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']

})

export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  errorMessage: string;

  constructor(private heroService: HeroService){}
  ngOnInit(): void
  {
    this.heroService.getHeroes()
      .then(
        (heroes) => this.heroes = heroes.splice(1,5),
        (error) => this.errorMessage = <any>error
      )
  }
}
