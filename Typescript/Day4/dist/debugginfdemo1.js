"use strict";
//When the compiler next compiles the TypeScript files,
//it will also generate a map file, 
//which has the map file extension, alongside the 
//JavaScript files in the dist folder.
function sum() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    return x[0] + x[1] + x[2];
}
var printMessage = function (msg) { return console.log("Message: " + msg); };
var message = ("Hello, TypeScript");
printMessage(message);
debugger;
var total = sum(100, 200, 300);
console.log("Total: " + total);
//# sourceMappingURL=debugginfdemo1.js.map