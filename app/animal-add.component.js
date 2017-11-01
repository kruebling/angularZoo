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
var AnimalAddComponent = (function () {
    function AnimalAddComponent() {
        this.newAnimalSender = new core_1.EventEmitter();
    }
    AnimalAddComponent.prototype.addAnimal = function (id, species, type, name, age, diet, location, careTakers, sex, likes, dislikes) {
        var newAnimalAdd = new animal_model_1.Animal(id, species, type, name, age, diet, location, careTakers, sex, likes, dislikes);
        this.newAnimalSender.emit(newAnimalAdd);
    };
    return AnimalAddComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalAddComponent.prototype, "newAnimalSender", void 0);
AnimalAddComponent = __decorate([
    core_1.Component({
        selector: 'animal-add',
        template: "\n  <div class=\"well\">\n    <h1>New Animal:</h1>\n    <label>Enter Animal ID:</label>\n    <input #newId><br>\n    <label>Enter Animal Species:</label>\n    <input #newSpecies><br>\n    <label>Enter Animal Type:</label>\n    <input #newType><br>\n    <label>Enter Animal Name:</label>\n    <input #newName><br>\n    <label>Enter Animal Age:</label>\n    <input #newAge><br>\n    <label>Enter Animal Diet:</label>\n    <input #newDiet><br>\n    <label>Enter Animal Location:</label>\n    <input #newLocation><br>\n    <label>Enter Amount of Caretakers:</label>\n    <input #newCareTakers><br>\n    <label>Enter Animal Sex:</label>\n    <input #newSex><br>\n    <label>Enter Animal Likes:</label>\n    <input #newLikes><br>\n    <label>Enter Animal Dislikes:</label>\n    <input #newDislikes><br>\n\n    <button class=\"btn btn-success\" (click)=\"addAnimal(newId.value, newSpecies.value, newType.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCareTakers.value, newSex.value, newLikes.value, newDislikes.value)\">Add Animal</button>\n  </div>\n  "
    })
], AnimalAddComponent);
exports.AnimalAddComponent = AnimalAddComponent;
//# sourceMappingURL=animal-add.component.js.map