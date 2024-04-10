import { Injectable } from '@angular/core';
import { character } from '../interfaces/character.interface';

import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})

export class DbzService {

    public characters: character[] = [{
        id : uuid(),
        name: 'Krilin',
        power : 1000
      },
      {
        id : uuid(),
        name: 'Goku',
        power : 9500
      },
      {
        id : uuid(),
        name: 'Vegeta',
        power: 7500
      }
    ];

    addCharacter(character:character):void{
      const newCharacter:character = {
        id: uuid(), ...character
      }


      this.characters.push(newCharacter);
        console.log("Insertado...");
    }

    // onDeleteCharacter(index:number){
    //     this.character.splice(index, 1);
    // }

    deleteCharacterById(index:string):void{
      this.characters = this.characters.filter(character => character.id !== index);
    }
}
