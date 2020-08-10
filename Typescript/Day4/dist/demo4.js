"use strict";
//One of TypeScript’s core principles is that type checking 
//focuses on the shape that values have. This is sometimes called 
//“duck typing” or “structural subtyping”.
// In TypeScript, interfaces fill the role of naming these types, 
// and are a powerful way of defining contracts within your code as well as 
// contracts with code outside of your project.
function buildTeslaModelS(teslaObj) {
    // Implementation Details
}
var model1Obj = {
    length: 196,
    width: 86,
    measureTirePressure: function () {
    },
    wheelbase: 116
};
var model2Obj = {
    length: "196",
    width: "86",
    wheelbase: "116",
    measureRemCharging: function () {
    }
};
buildTeslaModelS(model2Obj);
//# sourceMappingURL=demo4.js.map