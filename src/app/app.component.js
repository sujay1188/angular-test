"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Alex Smith';
        this.image = 'favicon.ico';
        this.color = 'red';
    }
    AppComponent.prototype.clicked = function () {
        this.color = this.color === 'red' ? 'blue' : 'red';
    };
    AppComponent.prototype.colorChange = function (color1) {
        this.color = color1;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n  <fieldset>\n    <h1>{{name}}</h1>\n    <img [src]=\"image\"/>\n  \n  <label [style.color]=\"color\"> Favorite Color </label>\n  <button (click)=\"clicked()\">Toggle Color</button>\n  <select (change)=\"colorChange($event.target.value)\">\n    <option>red</option>\n    <option>blue</option>\n    <option>green</option>\n  </select>\n\n  </fieldset>\n\n\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map