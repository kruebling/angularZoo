import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <table class="table">
    <thead>
      <th>ID</th>
      <th>Species</th>
      <th>Type</th>
      <th>Name</th>
      <th>Age</th>
      <th>Diet</th>
      <th>Location</th>
      <th># of Caretakers</th>
      <th>Sex</th>
      <th>Likes</th>
      <th>Dislikes</th>
    </thead>
    <tbody>
      <tr *ngFor="let animal of childAnimalList">
        <td>{{animal.id}}</td>
        <td>{{animal.species}}</td>
        <td>{{animal.type}}</td>
        <td>{{animal.name}}</td>
        <td>{{animal.age}}</td>
        <td>{{animal.diet}}</td>
        <td>{{animal.location}}</td>
        <td>{{animal.careTakers}}</td>
        <td>{{animal.sex}}</td>
        <td>{{animal.likes}}</td>
        <td>{{animal.dislikes}}</td>
        <td>
          <button (click)='editAnimal(animal)'>Edit</button>
          <button (click)='deleteAnimal(animal)'>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickEditSender = new EventEmitter();
  @Output() clickDeleteSender = new EventEmitter();

  editAnimal(clickedAnimal: Animal){
    this.clickEditSender.emit(clickedAnimal);
  }

  deleteAnimal(clickedAnimal: Animal){
    this.clickDeleteSender.emit(clickedAnimal);
  }
}
