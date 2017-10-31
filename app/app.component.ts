import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h3>Angular Animals:</h3>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  newAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal(1, "Vulpes vulpes", "Mr. Fox", 8, "Quail", "Tree", 3, "Male", "Stealing", "Farmers"),
    new Animal(2, "Meles meles", "Clive Badger", 7, "Mice", "Burrow", 4, "Male", "Pracicing Law", "Mr. Fox"),
    new Animal(3, "Lutrinae", "Coach Skip", 2, "Fish", "River", 4, "Male", "Coaching Whack-bat", "Mr. Fox's Son"),
    new Animal(4, "Didelphimorphia", "Kylie", 1, "Minnows", "Burrow", 4, "Male", "Sidekick to Mr. Fox", "Everything")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
