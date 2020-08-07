abstract class Mammals{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    //Non-Abstract Method
    eat():string{
        return `All ${this.name} can Eat`;
    }

    //Abstract Method
    abstract walk():string;
}

class Tiger extends Mammals{
    
    walk(): string {
        console.log("Method  implemented.");
        return "Tiger Walks With Four Legs";
    }

    run(){
        console.log("Run Faster");
    }
    
}

class Human extends Mammals{

    walk(): string {
        console.log("Method  implemented.");
        return "Human Walks With Two Legs";
    }
}

//Cannot create an instance of an abstract class.
let m:Mammals = new Tiger("Tiger");

//m.run();
console.log(m.eat())
console.log(m.walk())