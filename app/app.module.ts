import { NgModule }      from '@angular/core';
import {FormsModule} from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, HeroDetailComponent, HeroesComponent],// components, pipes and directives here
    bootstrap:     [AppComponent]
})
export class AppModule { }