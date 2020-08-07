"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataTypes_1 = require("./dataTypes");
var peoples = [new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York")
];
var products = [new dataTypes_1.Products("Running Shoes", 100),
    new dataTypes_1.Products("Hat", 25)
];
products.forEach(function (p) { console.log("" + p.name); });
peoples.forEach(function (p) { console.log("" + p.name); });
