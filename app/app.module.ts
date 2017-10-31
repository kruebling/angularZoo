import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Task }   from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ Task ],
  bootstrap:    [ Task ]
})

export class AppModule { }
