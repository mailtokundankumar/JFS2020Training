"use strict";
//contract - contains a list of rules
//the object which you are going to forward to this
//method parameter should be of Type TeslaModelS
function buildTeslaModelS(teslaObj) {
}
var modelA = {
    length: 196,
    width: 86,
    seatingCapacity: 4,
    wheelbase: 116,
    getRemCharging: function () {
        return 10;
    },
    getTyrePressure: function () {
        return 20;
    }
};
buildTeslaModelS(modelA);
//# sourceMappingURL=demo5.js.map