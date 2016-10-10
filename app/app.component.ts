
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'// relative to root
})
export class AppComponent implements OnInit{

    public ngOnInit (){

        console.log("app component init");
    }

}