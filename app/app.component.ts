import { Component } from '@angular/core';
// import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 1, name: "Spiderman"},
  { id: 2, name: "Superman"},
  { id: 3, name: "Batman"},
  { id: 4, name: "WonderWoman"},
  { id: 5, name: "Green Lantern"},
  { id: 6, name: "Ironman"},
  { id: 7, name: "Thor"},
  { id: 8, name: "Catwoman"},
  { id: 9, name: "Hulk"},
  { id: 10, name: "Antman"},
  { id: 11, name: "Flash"}
]

@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes" 
          [class.selected]="hero===selectedHero"
          (click)=onSelect(hero)>
          <!-- each hero goes here -->
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
        .selected {
          background-color: #CFD8DC !important;
          color: white;
        }
        .heroes {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em;
        }
        .heroes li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
        }
        .heroes li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
        }
        .heroes li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
        }
        .heroes .text {
          position: relative;
          top: -3px;
        }
        .heroes .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
      `]
})

export class AppComponent { 
  title = 'Tour of Heroes';
  heroes = HEROES;
  // hero: Hero  = {
  //   id: 1,
  //   name: 'Spiderman'
  // }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
