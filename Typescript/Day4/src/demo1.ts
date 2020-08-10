const fullNameMaxLength = 10
class Employee{

    private _fullName:string;

    //setting a value to a private property
    //via constructor
    constructor(fullName:string){
        this._fullName = fullName;
        //console.log(this._fullName);
    }

    //Modern way of declaring a getter method in TS
    get fullName():string{
        return this._fullName;
    }

    //Modern way of declaring a setter method in TS
    set fullName(newName:string){
        if(newName.length > fullNameMaxLength){
            throw new Error("fullName has a max length of "+
            fullNameMaxLength);
        }else{
            this._fullName = newName;
        }
    }
}

let employee1 = new Employee("Sabari");

employee1.fullName="Sundar Pichai" //calling the setter method

console.log("Employee Name Is:"+employee1.fullName); // calling the getter method

//employee1._fullName;
// try{
// employee1.setFullName("Sabari Balaji")
// }catch(err){
//     console.log(err.message);
// }
// console.log("Employee Name Is:"+employee1.getFullName());