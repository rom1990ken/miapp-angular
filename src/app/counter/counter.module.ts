import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [CounterComponent] //Para ser usado externamente
})
export class CounterModule{

}
