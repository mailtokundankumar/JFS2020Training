"use strict";
var Tesla = /** @class */ (function () {
    function Tesla() {
        this.seatingCapacity = 30;
        this.length = 10;
        this.width = 10;
        this.wheelbase = 20;
        //class own additional property
        this.sabari = "trainer";
    }
    Tesla.prototype.getRemCharging = function () {
        return 10;
    };
    return Tesla;
}());
//'TeslaModelS' only refers to a type,
//but is being used as a value here
//new TeslaModelS();
//# sourceMappingURL=demo6.js.map