import { Component, Input } from '@angular/core';
import { Hero } from './Hero';

@Component({
    selector: 'hero-detail',
    template:`
      <div *ngIf="hero">
        <h2>{{hero.name}} Details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name" />
        </div>
      </div>
    `
})

export class HeroDetailComponent {
    /* Angular requires that we declare the target property (hero) to be an input property */
    @Input()
    hero: Hero;

    // constructor(parameters) {
        
    // }
}