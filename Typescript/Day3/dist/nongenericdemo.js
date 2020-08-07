"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataTypes_1 = require("./dataTypes");
var peoples = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")
];
var products = [new dataTypes_1.Products("Running Shoes", 100),
    new dataTypes_1.Products("Hat", 25)
];
//Generics is helping to implement the concept of DRY - DoNot Repeat Yourself
var PeopleCollection = /** @class */ (function () {
    function PeopleCollection(initialitems) {
        var _a;
        this.items = [];
        (_a = this.items).push.apply(_a, initialitems);
    }
    PeopleCollection.prototype.add = function (newItem) {
        this.items.push(newItem);
    };
    PeopleCollection.prototype.getNames = function () {
        return this.items.map(function (item) { return item.name; });
    };
    PeopleCollection.prototype.getItem = function (index) {
        return this.items[index];
    };
    return PeopleCollection;
}());
var peopleData = new PeopleCollection(peoples);
console.log("Names: " + peopleData.getNames().join(", "));
var firstPerson = peopleData.getItem(0);
console.log("First Person: " + firstPerson.name + ", " + firstPerson.city);
