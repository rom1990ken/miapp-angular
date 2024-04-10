import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<character> = new EventEmitter();

  public character: character = {
      name : '',
      power : 0
  };

  emitCharacter():void{
    //debugger; //Punto de  control
    //console.log(this.character);

    if(this.character.name.length == 0) return;

   // this.onNewCharacter.emit(this.character);
    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;
  }
}
