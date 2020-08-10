"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Surrounding with factory method
function SelfDriving(var1) {
    return function (constructorFunction) {
        console.log('--- decorator function invokded ----');
        constructorFunction.prototype.selfDrivable = var1;
    };
}
// function SelfDriving(constructorFunction: Function){
//         console.log(constructorFunction);
//         console.log('--- decorator function invokded ----')
//         constructorFunction.prototype.selfDrivable = true;
// }
var Car = /** @class */ (function () {
    function Car(make) {
        console.log('-- this constructor invoked --');
        this._make = make;
        //this.selfDrivable = true;
    }
    Object.defineProperty(Car.prototype, "make", {
        get: function () {
            return this._make;
        },
        enumerable: false,
        configurable: true
    });
    Car = __decorate([
        SelfDriving(true)
    ], Car);
    return Car;
}());
var toyota = new Car("India");
console.log(toyota.make);
console.log(toyota.selfDrivable);
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck = __decorate([
        SelfDriving(false)
    ], Truck);
    return Truck;
}());
//# sourceMappingURL=demo3.js.map