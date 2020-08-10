//Surrounding with factory method
 function SelfDriving(var1:boolean){

     return function(constructorFunction: Function){
         console.log('--- decorator function invokded ----')
         constructorFunction.prototype.selfDrivable = var1;
     }
 }

// function SelfDriving(constructorFunction: Function){
//         console.log(constructorFunction);
//         console.log('--- decorator function invokded ----')
//         constructorFunction.prototype.selfDrivable = true;
    
// }

@SelfDriving(true)
class Car {
    private _make: string;
    constructor(make: string) {
        console.log('-- this constructor invoked --');
        this._make = make;
        //this.selfDrivable = true;
    }

    get make(){
        return this._make;
    }
}

let toyota = new Car("India");
console.log(toyota.make);
console.log(toyota.selfDrivable);

@SelfDriving(false)
class Truck{

}