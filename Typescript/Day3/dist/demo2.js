"use strict";
// //Generators are consumed in the same way as iterators. 
// //The JavaScript runtime creates the next function and executes 
// //the generator function until it reaches the yield keyword, 
// //which provides a value in thesequence. 
// class Product {
//     //name: string;
//     //price: number;
//     constructor(public name: string, public price: number) {
//         this.name = name;
//         this.price = price;
//     }
//     toString() {
//         return `toString: Name: ${this.name}, Price: ${this.price}`;
//     }
// }
// //Generators are the replacement for iterators
// //I am creating a Generator function
// function* createProductIterator() {
//     yield new Product("Hat", 100);
//     yield new Product("Boots", 100);
//     yield new Product("Umbrella", 23);
//     yield new Product("Watch", 56);
// }
// let iterator1 = createProductIterator();
// let result1 = iterator1.next();
// while (!result1.done) {
//     console.log(result1.value.toString());
//     result1 = iterator1.next();
// }
