import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    @Output()
    public onDelete:EventEmitter<string> = new EventEmitter();


    @Input()
    public characterList: character[] = [
      {
        name: 'Trunks',
        power: 10
      }
    ];

    ondeleteCharacter(id?:string):void{
        if(!id) return;

        console.info(id);
        this.onDelete.emit(id);
    }
}
