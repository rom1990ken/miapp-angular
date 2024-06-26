import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroeModule } from './heroes/hero/heroes.module';
import { DbzModule } from './dbz/dbz.module';
/*import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';*/


@NgModule({
  declarations: [
    AppComponent,
    /*HeroComponent,
    ListComponent*/
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroeModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
