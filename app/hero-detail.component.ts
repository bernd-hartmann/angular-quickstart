import {Component, Input} from "@angular/core";
import {Hero} from "./hero";

@Component({
    selector:"my-hero-detail",
    template: `
<div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <p>(event) Binding in runden Klammern</p>
    <p>[property] Binding in eckigen Klammern</p>

    <div>
        <span>say Hello on input</span><!-- kein window verfügbar nur context (scope) von component -->
        <button (click)="sayHello()">sayHello</button>
        <input [value]="hero.name"
               (input)="sayHello()">
    </div>
    <div>
        <label>name: </label>
        <input [ngModel]="hero.name" readonly disabled (input)="console.log('input event')"><!--readonly-->
        <input [ngModel]="hero.name" (ngModelChange)="hero.name=$event">
    </div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
    </div>
</div>
`
})
export class HeroDetailComponent {

    @Input()
public hero:Hero;

}
