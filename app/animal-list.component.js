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
var AnimalListComponent = (function () {
    function AnimalListComponent() {
        this.clickEditSender = new core_1.EventEmitter();
        this.clickDeleteSender = new core_1.EventEmitter();
        this.filterByAge = "all";
    }
    AnimalListComponent.prototype.editAnimal = function (clickedAnimal) {
        this.clickEditSender.emit(clickedAnimal);
    };
    AnimalListComponent.prototype.deleteAnimal = function (clickedAnimal) {
        this.clickDeleteSender.emit(clickedAnimal);
    };
    AnimalListComponent.prototype.onChange = function (filter) {
        this.filterByAge = filter;
    };
    return AnimalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalListComponent.prototype, "childAnimalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "clickEditSender", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "clickDeleteSender", void 0);
AnimalListComponent = __decorate([
    core_1.Component({
        selector: 'animal-list',
        template: "\n  <select (change)=\"onChange($event.target.value)\">\n    <option value=\"all\">All Animals</option>\n    <option value=\"old\">Older Animals</option>\n    <option value=\"young\">Younger Animals</option>\n  </select><br>\n  <table class=\"table\">\n    <thead>\n      <th>ID</th>\n      <th>Species</th>\n      <th>Type</th>\n      <th>Name</th>\n      <th>Age</th>\n      <th>Diet</th>\n      <th>Location</th>\n      <th># of Caretakers</th>\n      <th>Sex</th>\n      <th>Likes</th>\n      <th>Dislikes</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let animal of childAnimalList | age:filterByAge\">\n        <td>{{animal.id}}</td>\n        <td>{{animal.species}}</td>\n        <td>{{animal.type}}</td>\n        <td>{{animal.name}}</td>\n        <td>{{animal.age}}</td>\n        <td>{{animal.diet}}</td>\n        <td>{{animal.location}}</td>\n        <td>{{animal.careTakers}}</td>\n        <td>{{animal.sex}}</td>\n        <td>{{animal.likes}}</td>\n        <td>{{animal.dislikes}}</td>\n        <td>\n          <button class=\"btn btn-info\" (click)='editAnimal(animal)'>Edit</button>\n          <button class=\"btn btn-danger\" (click)='deleteAnimal(animal)'>Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  "
    })
], AnimalListComponent);
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animal-list.component.js.map