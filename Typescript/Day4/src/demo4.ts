//One of TypeScript’s core principles is that type checking 
//focuses on the shape that values have. This is sometimes called 
//“duck typing” or “structural subtyping”.

// In TypeScript, interfaces fill the role of naming these types, 
// and are a powerful way of defining contracts within your code as well as 
// contracts with code outside of your project.

function buildTeslaModelS(teslaObj:any) {
    // Implementation Details
  }

let model1Obj = {
    length: 196, //Number
    width: 86, //Number
    measureTirePressure: function () {
    },
    wheelbase: 116
  }

let model2Obj = {
    length: "196", //String
    width: "86", //String
    wheelbase: "116",
    measureRemCharging: function () {
    }
  }

buildTeslaModelS(model2Obj)