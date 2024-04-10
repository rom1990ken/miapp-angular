import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template : `<h4>Counter : {{counter}}</h4>
  <button (click)="incrementBy(1)">+1</button>
  <button (click)="incrementBy(-1)">-1</button>`
})

export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  constructor() { }

  incrementBy(value: number):void{
      this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }

}
