import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character [] = [
    {
      name: 'Goku',
      power: 9000,
    },
    {
      name: 'Vegeta',
      power: 8000,
    },
    {
      name: 'Trunks',
      power: 7000,
    }
  ];

  public onNewCharacter ( character: Character ) : void {
    this.characters.push( character );
  }

}
