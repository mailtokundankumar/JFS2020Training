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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
        //console.log("Parent Product Class Constructor");
    }
    Product.prototype.toString = function () {
        //var ceo:string = "Stevejobs";
        return "toString: Name: " + this.name + ", Price: " + this.price;
    };
    return Product;
}());
//Classes can only extend a single class.
//Supporting only Single Inheritance
//1.Single Inheritance
//2. Muti-Level Inheritance are supported
var TaxedProduct = /** @class */ (function (_super) {
    __extends(TaxedProduct, _super);
    //taxRate:number;
    //Constructors for derived classes must contain a 'super' call.
    function TaxedProduct(name, price, taxRate) {
        if (taxRate === void 0) { taxRate = 1.2; }
        var _this = _super.call(this, name, price) || this;
        _this.taxRate = taxRate;
        return _this;
        //this.taxRate = taxRate;
        //console.log("Child TaxProduct Class Constructor");
    }
    TaxedProduct.prototype.getPriceIncTax = function () {
        //let x:boo
        return Number(this.price) * this.taxRate;
    };
    //overriden
    TaxedProduct.prototype.toString = function () {
        //var ceo:string = "Stevejobs";
        //super keyword is also used to call the base class member functions
        // return super.toString() `  TaxRate For Products:${this.taxRate}`;
        var chainResult = _super.prototype.toString.call(this);
        return chainResult + ", Tax: " + this.getPriceIncTax();
    };
    //staic method
    //Spread Operator
    //Type Safe
    //VarArgs
    //kwArgs
    //static methods are called as class methods
    TaxedProduct.process = function () {
        var products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            products[_i] = arguments[_i];
        }
        //products vairable is an Product Array 
        //forEach method of an array object will help us in
        //iterating the sequence of array elements
        //products[hat,boots]  
        //products.forEach( (p) => console.log(p.toString()) ); 
        products.forEach(function (p) { return console.log(p.toString()); });
    };
    return TaxedProduct;
}(Product));
// let hat = new TaxedProduct("Hat","100");
// let boots = new TaxedProduct("Boots","200",1.3);
// let watch = new TaxedProduct("Watch","450",1.4);
//whenever you have an array representation you got to use []
//hat.process(hat,boots,watch);
//TaxedProduct.process(hat,boots,watch);
//javascript object in key value paired
//key will always stay as String
// let data = {
//  hat: new TaxedProduct("Hat","100"),
//  boots: new TaxedProduct("Boots","200",1.3),
//  watch: new TaxedProduct("Watch","450",1.4),
// }
// Object.keys(data).forEach(key => console.log(data[key].toString()))
//Object.values(data) collection of values
//data.iPad = new TaxedProduct("Boots","200",1.3);
//Object.keys collects all keys from the given list
//Object.keys(data).forEach(d => console.log(typeof d))
//console.log( )
// Storing the Data by Key using Map Objects
// Its easy to use a basic collections but
// limitations in javscript object is key should be in string
// Javascript also provides the Map through which you can store data using
// keys of any type -Purpose Built
var data = new Map();
data.set("hat", new TaxedProduct("Hat", "100"));
data.set("boots", new TaxedProduct("Boots", "200", 1.3));
data.set("watch", new TaxedProduct("Watch", "450", 1.4));
//    3
//    [Map Iterator] { 'hat', 'boots', 'watch' }
//console.log(data.size);
//console.log(data.keys())
//console.log([...data.keys()]);
__spreadArrays(data.keys()).forEach(function (key) { return console.log(data.get(key).toString()); });
// data.forEach((value,key) => {
//     console.log(key);
//     console.log(value.toString())
// });
//Object.keys(data).forEach(key => console.log(data[key].toString()))
//console.log(hat.toString());
//console.log(boots.toString());
