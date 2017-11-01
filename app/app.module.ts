import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalListComponent}  from './animal-list.component';
import { AnimalEditComponent }  from './animal-edit.component';
import { AnimalAddComponent }  from './animal-add.component';
import { AgePipe } from './age.pipe';
import { FormsModule }  from '@angular/forms';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalEditComponent,
    AnimalAddComponent,
    AgePipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
