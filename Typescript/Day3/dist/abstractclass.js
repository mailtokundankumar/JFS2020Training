"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mammals = /** @class */ (function () {
    function Mammals(name) {
        this.name = name;
    }
    //Non-Abstract Method
    Mammals.prototype.eat = function () {
        return "All " + this.name + " can Eat";
    };
    return Mammals;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.walk = function () {
        console.log("Method  implemented.");
        return "Tiger Walks With Four Legs";
    };
    Tiger.prototype.run = function () {
        console.log("Run Faster");
    };
    return Tiger;
}(Mammals));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Human.prototype.walk = function () {
        console.log("Method  implemented.");
        return "Human Walks With Two Legs";
    };
    return Human;
}(Mammals));
//Cannot create an instance of an abstract class.
var m = new Tiger("Tiger");
//m.run();
console.log(m.eat());
console.log(m.walk());
