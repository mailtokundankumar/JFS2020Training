"use strict";
//in TS its called as an Decorator
//in java its called as an Annotation @Override - Dynamic Metadata (interfaces)
//In angular we have n-number of pre-built decorators
//comments(metadata) will get executed
//It offers Reusability
//Decorators can be used to annotate or modify 
//classes, 
//methods, and
//properties.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorators will be created with the help of functions in TS.
function logged(target, name, descriptor) {
    console.log(target);
    console.log(name); //greet
    console.log(descriptor);
    console.log(target[name]);
    var fn = target[name];
    descriptor.value = function () {
        console.log("Calling " + name);
        return fn.apply(this, arguments);
    };
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    //Experimental support for decorators is a feature 
    // that is subject to change in a future release. 
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.prototype.welcome = function () {
        return "Welcome";
    };
    __decorate([
        logged //decorator
    ], Greeter.prototype, "greet", null);
    __decorate([
        logged
    ], Greeter.prototype, "welcome", null);
    return Greeter;
}());
var welcome = new Greeter('Steve');
var msg = welcome.greet();
welcome.welcome();
console.log(msg);
//# sourceMappingURL=demo2.js.map