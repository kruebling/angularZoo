import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { ANIMALS } from './seed-animals';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="card card-body">
        <h1>Angular Animals:</h1><br>
        <animal-list [childAnimalList]="masterAnimalList" (clickEditSender)="editAnimal($event)" (clickDeleteSender)="deleteAnimal($event)"></animal-list>
        <hr>
        <animal-edit [childSelectedAnimal]="selectedAnimal" (doneEditingSender)="doneEditing()">Brushin Hair...</animal-edit>
        <animal-add (newAnimalSender)="addAnimal($event)">Birthin...</animal-add>
      </div>
    </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  newAnimal = null;

  masterAnimalList = ANIMALS;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  deleteAnimal(clickedAnimal){
    this.masterAnimalList.splice(this.masterAnimalList.indexOf(clickedAnimal), 1);
  }

  doneEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
