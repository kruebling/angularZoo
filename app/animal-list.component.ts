import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
  @Output() clickEditSender = new EventEmitter();
  @Output() clickDeleteSender = new EventEmitter();
}
