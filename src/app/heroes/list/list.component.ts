import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Thor', 'Ironman', 'Capitan America', 'Hulk', 'Black Widows'];
  public deletedHero?: string;

  removeLastHero () : void {
    this.deletedHero = this.heroNames.pop();
  }
}
