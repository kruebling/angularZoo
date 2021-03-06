import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-add',
  template: `
  <div class="well">
    <h1>New Animal:</h1>
    <label>Enter Animal ID:</label>
    <input type="number" #newId><br>
    <label>Enter Animal Species:</label>
    <input type="text" #newSpecies><br>
    <label>Enter Animal Type:</label>
    <input type="text" #newType><br>
    <label>Enter Animal Name:</label>
    <input type="text" #newName><br>
    <label>Enter Animal Age:</label>
    <input type="number" #newAge><br>
    <label>Enter Animal Diet:</label>
    <input type="text" #newDiet><br>
    <label>Enter Animal Location:</label>
    <input type="text" #newLocation><br>
    <label>Enter Amount of Caretakers:</label>
    <input type="number" #newCareTakers><br>
    <label>Enter Animal Sex:</label>
    <input type="text" #newSex><br>
    <label>Enter Animal Likes:</label>
    <input type="text" #newLikes><br>
    <label>Enter Animal Dislikes:</label>
    <input type="text" #newDislikes><br>

    <button class="btn btn-success" (click)="addAnimal(newId.value, newSpecies.value, newType.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCareTakers.value, newSex.value, newLikes.value, newDislikes.value); newId.value=''; newSpecies.value=''; newType.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCareTakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; ">Add Animal</button>
  </div>
  `
})


export class AnimalAddComponent {
  @Output() newAnimalSender = new EventEmitter();

  addAnimal(
  id: number,
  species: string,
  type: string,
  name: string,
  age: number,
  diet: string,
  location: string,
  careTakers: number,
  sex: string,
  likes: string,
  dislikes: string){
    let newAnimalAdd: Animal = new Animal (id, species, type, name, age, diet, location, careTakers, sex, likes, dislikes)
    this.newAnimalSender.emit(newAnimalAdd);
  }
}
