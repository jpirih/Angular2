import {Component, Input, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap'
import {Location} from "@angular/common";
import {error} from "util";


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl:'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;
  errorMessage: string;

  constructor (
    private  heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void{
      this.route.params
        .subscribe((params) => {
        let id = +params['id'];
        this.getHero(id)
      })
  }

  getHero(id: number): void{
      this.heroService.getHero(id)
        .then(
          (hero) => this.hero = hero,

        )
  }

  goBack(): void{
      this.location.back();
  }
  save():void{
      this.heroService.update(this.hero).then(() => this.goBack());
    }


}
