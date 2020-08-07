"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.City = exports.Products = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, city) {
        this.name = name;
        this.city = city;
    }
    return Person;
}());
exports.Person = Person;
var Products = /** @class */ (function () {
    function Products(name, price) {
        this.name = name;
        this.price = price;
    }
    return Products;
}());
exports.Products = Products;
var City = /** @class */ (function () {
    function City(name, population) {
        this.name = name;
        this.population = population;
    }
    return City;
}());
exports.City = City;
var Employee = /** @class */ (function () {
    function Employee(name, role) {
        this.name = name;
        this.role = role;
    }
    return Employee;
}());
exports.Employee = Employee;
