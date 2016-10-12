import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero"

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {


    public title: string = "my employees";
    public hero: Hero = {id: 1, name: "Mr. Windstorm"};


    public ngOnInit() {

        console.log("app component init");
    }

    public sayHello() {
        alert('hello');
    }
}

