import {Component, OnInit} from "@angular/core"
import {HeroService} from './hero.service';
import {Hero} from "./hero"

@Component({
    selector:"my-heroes",
    templateUrl:"heroes.component.html",
    providers: [HeroService],
    moduleId: module.id
})
export class HeroesComponent implements OnInit{
    constructor(private heroService:HeroService){

    }

    public heroes: Array<Hero> = null;//HEROES;


    public selectedHero:Hero;

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public ngOnInit(){
        this.heroService.getHeroes().then((heroes:Array<Hero>)=>{
            this.heroes =heroes;
        });
    }
}
