//contract - contains a list of rules

//you cannot create a contract like duck typing via Class approach
interface TeslaModelS {
    length: number;
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    getTyrePressure?: () => number; //arrow function signature - abstract method
    getRemCharging: () => number;
}

//the object which you are going to forward to this
//method parameter should be of Type TeslaModelS
function buildTeslaModelS(teslaObj: TeslaModelS) {
}

let modelA:TeslaModelS = {
    length: 196,
    width: 86,
    seatingCapacity: 4,
    wheelbase: 116,
    getRemCharging: function () {
        return 10;
    },
    getTyrePressure : function(){
        return 20;
    }
}

buildTeslaModelS(modelA)