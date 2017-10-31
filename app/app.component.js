"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var AppComponent = (function () {
    function AppComponent() {
        this.selectedAnimal = null;
        this.newAnimal = null;
        this.masterAnimalList = [
            new animal_model_1.Animal(1, "Vulpes vulpes", "Mr. Fox", 8, "Quail", "Tree", 3, "Male", "Stealing", "Farmers"),
            new animal_model_1.Animal(2, "Meles meles", "Clive Badger", 7, "Mice", "Burrow", 4, "Male", "Pracicing Law", "Mr. Fox"),
            new animal_model_1.Animal(3, "Lutrinae", "Coach Skip", 2, "Fish", "River", 4, "Male", "Coaching Whack-bat", "Mr. Fox's Son"),
            new animal_model_1.Animal(4, "Didelphimorphia", "Kylie", 1, "Minnows", "Burrow", 4, "Male", "Sidekick to Mr. Fox", "Everything")
        ];
    }
    AppComponent.prototype.editAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.deleteAnimal = function (clickedAnimal) {
        this.masterAnimalList.splice(this.masterAnimalList.indexOf(clickedAnimal), 1);
    };
    AppComponent.prototype.finishedEditing = function () {
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
        template: "\n    <div class=\"container\">\n      <div class=\"card card-body\">\n        <h3>Angular Animals:</h3>\n        <animal-list [childAnimalList]=\"masterAnimalList\" (clickEditSender)=\"editAnimal($event)\" (clickDeleteSender)=\"deleteAnimal($event)\"></animal-list>\n        <hr>\n        <edit-animal [childSelectedAnimal]=\"selectedAnimal\" (doneEditing)=\"finishedEditing()\"></edit-animal>\n        <new-animal (newAnimalSender)=\"addAnimal($event)\"></new-animal>\n      </div>\n    </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map