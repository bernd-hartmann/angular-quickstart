import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero"

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:["app/app.component.css"]
})
export class AppComponent implements OnInit {

    public title: string = "my employees";
    public hero: Hero = {id: 1, name: "Mr. Windstorm"}
    public heroes: Array<Hero> = HEROES;

    public selectedHero:Hero;

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public ngOnInit() {

        console.log("app component init");
    }

    public sayHello() {
        alert('hello');
    }
}

const HEROES: Array<Hero> = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];