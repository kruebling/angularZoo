"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var AnimalEditComponent = (function () {
    function AnimalEditComponent() {
        this.doneEditingSender = new core_1.EventEmitter();
    }
    AnimalEditComponent.prototype.doneEditing = function () {
        this.doneEditingSender.emit();
    };
    return AnimalEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", animal_model_1.Animal)
], AnimalEditComponent.prototype, "childSelectedAnimal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalEditComponent.prototype, "doneEditingSender", void 0);
AnimalEditComponent = __decorate([
    core_1.Component({
        selector: 'animal-edit',
        template: "\n    <div *ngIf=\"childSelectedAnimal\">\n      <div class=\"well\">\n        <h2>{{childSelectedAnimal.name}}</h2>\n        <hr>\n        <h3>Edit:</h3>\n        <label>Change Animal ID:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.id\"><br>\n        <label>Change Animal Species:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.species\"><br>\n        <label>Change Animal Type:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.type\"><br>\n        <label>Change Animal Name:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.name\"><br>\n        <label>Change Animal Age:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.age\"><br>\n        <label>Change Animal Diet:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.diet\"><br>\n        <label>Change Animal Location:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.location\"><br>\n        <label>Change Number of Animal Caretakers:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.careTakers\"><br>\n        <label>Change Animal Sex:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.sex\"><br>\n        <label>Change Animal Likes:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.likes\"><br>\n        <label>Change Animal Dislikes:</label>\n        <input [(ngModel)]=\"childSelectedAnimal.dislikes\"><br>\n        <button class=\"btn btn-info\" (click)=\"doneEditing()\">Finished Editing</button>\n      </div>\n    </div>\n  "
    })
], AnimalEditComponent);
exports.AnimalEditComponent = AnimalEditComponent;
//# sourceMappingURL=animal-edit.component.js.map