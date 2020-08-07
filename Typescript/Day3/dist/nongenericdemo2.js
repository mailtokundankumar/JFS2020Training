"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataTypes_1 = require("./dataTypes");
var peoples = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")
];
var products = [new dataTypes_1.Products("Running Shoes", 100),
    new dataTypes_1.Products("Hat", 25)
];
var Demo = /** @class */ (function () {
    function Demo() {
    }
    return Demo;
}());
//any datatype -> It will not contribute for typesafety 
//let x:dataType = new Person("","");
//let y:dataType = new Products("",123);
var DataCollection = /** @class */ (function () {
    function DataCollection(initialItems) {
        var _a;
        this.items = [];
        //pushes array of items with the help pf spread opertaor
        //array foreach
        (_a = this.items).push.apply(_a, initialItems);
        // initialItems.forEach((e)=> {
        //     this.items.push(e);
        // });
    }
    DataCollection.prototype.add = function (newItem) {
        //single item push
        this.items.push(newItem);
    };
    DataCollection.prototype.getNames = function () {
        return this.items.map(function (item) { return item.name; });
    };
    DataCollection.prototype.getItem = function (index) {
        return this.items[index];
    };
    return DataCollection;
}());
var peopleData = new DataCollection(peoples);
console.log("Names: " + peopleData.getNames().join(", "));
var data = peopleData.getItem(0);
//instanceof operator check for the type
if (data instanceof dataTypes_1.Person) {
    console.log("First Person: " + data.name + ", " + data.city);
}
else if (data instanceof dataTypes_1.Products) {
    console.log("First Product: " + data.name + ", " + data.price);
}
