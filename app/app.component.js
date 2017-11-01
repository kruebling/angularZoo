"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var seed_animals_1 = require("./seed-animals");
var AppComponent = (function () {
    function AppComponent() {
        this.selectedAnimal = null;
        this.newAnimal = null;
        this.masterAnimalList = seed_animals_1.ANIMALS;
    }
    AppComponent.prototype.editAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.deleteAnimal = function (clickedAnimal) {
        this.masterAnimalList.splice(this.masterAnimalList.indexOf(clickedAnimal), 1);
    };
    AppComponent.prototype.doneEditing = function () {
        this.selectedAnimal = null;
    };
    AppComponent.prototype.addAnimal = function (newAnimalFromChild) {
        this.masterAnimalList.push(newAnimalFromChild);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n      <div class=\"card card-body\">\n        <h1>Angular Animals:</h1><br>\n        <animal-list [childAnimalList]=\"masterAnimalList\" (clickEditSender)=\"editAnimal($event)\" (clickDeleteSender)=\"deleteAnimal($event)\"></animal-list>\n        <hr>\n        <animal-edit [childSelectedAnimal]=\"selectedAnimal\" (doneEditingSender)=\"doneEditing()\">Brushin Hair...</animal-edit>\n        <animal-add (newAnimalSender)=\"addAnimal($event)\">Birthin...</animal-add>\n      </div>\n    </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map