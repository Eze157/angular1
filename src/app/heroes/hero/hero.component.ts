import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:   string = 'ironman';
  public age:    number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  getHero () {
    return `${this.name} - ${this.age}`;
  }

  changeName () : string {
    return this.name = 'Thor';
  }

  changeAge () : number {
    return this.age = 1000;
  }

  reset () : void {
    this.name = 'ironman';
    this.age = 45;
  }

}
