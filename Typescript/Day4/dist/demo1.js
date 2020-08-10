"use strict";
var fullNameMaxLength = 10;
var Employee = /** @class */ (function () {
    //setting a value to a private property
    //via constructor
    function Employee(fullName) {
        this._fullName = fullName;
        //console.log(this._fullName);
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        //Modern way of declaring a getter method in TS
        get: function () {
            return this._fullName;
        },
        //Modern way of declaring a setter method in TS
        set: function (newName) {
            if (newName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " +
                    fullNameMaxLength);
            }
            else {
                this._fullName = newName;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee("Sabari");
employee1.fullName = "Sundar Pichai"; //calling the setter method
console.log("Employee Name Is:" + employee1.fullName); // calling the getter method
//employee1._fullName;
// try{
// employee1.setFullName("Sabari Balaji")
// }catch(err){
//     console.log(err.message);
// }
// console.log("Employee Name Is:"+employee1.getFullName());
//# sourceMappingURL=demo1.js.map