import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
    <div *ngIf="childSelectedAnimal">
      <div class="well">
        <h2>{{childSelectedAnimal.name}}</h2>
        <hr>
        <h3>Edit:</h3>
        <label>Change Animal ID:</label>
        <input [(ngModel)]="childSelectedAnimal.id"><br>
        <label>Change Animal Species:</label>
        <input [(ngModel)]="childSelectedAnimal.species"><br>
        <label>Change Animal Type:</label>
        <input [(ngModel)]="childSelectedAnimal.type"><br>
        <label>Change Animal Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name"><br>
        <label>Change Animal Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age"><br>
        <label>Change Animal Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet"><br>
        <label>Change Animal Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location"><br>
        <label>Change Number of Animal Caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.careTakers"><br>
        <label>Change Animal Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex"><br>
        <label>Change Animal Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes"><br>
        <label>Change Animal Dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes"><br>
        <button class="btn btn-info" (click)="doneEditing()">Finished Editing</button>
      </div>
    </div>
  `
})

export class AnimalEditComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneEditingSender = new EventEmitter();

  doneEditing(){
    this.doneEditingSender.emit();
  }
}
