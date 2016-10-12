import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero"
import {HEROES} from "./mock-heroes"
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:["app/app.component.css"],
    providers: [HeroService]
})
export class AppComponent implements OnInit {

    constructor(private heroService:HeroService){

    }
    public title: string = "my employees";
    public hero: Hero = {id: 1, name: "Mr. Windstorm"}
    public heroes: Array<Hero> = null;//HEROES;

    public selectedHero:Hero;

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public ngOnInit() {
        this.heroService.getHeroes().then((heroes:Array<Hero>)=>{
            this.heroes =heroes;
        });
        console.log("app component init");
    }

    public sayHello() {
        alert('hello');
    }
}

