//in TS its called as an Decorator
//in java its called as an Annotation @Override - Dynamic Metadata (interfaces)
//In angular we have n-number of pre-built decorators
//comments(metadata) will get executed
//It offers Reusability
//Decorators can be used to annotate or modify 
//classes, 
//methods, and
//properties.

//Decorators will be created with the help of functions in TS.

function logged(target:any , name:string,descriptor : PropertyDescriptor){

    console.log(target);
    console.log(name); //greet
    console.log(descriptor);
    console.log(target[name])
    const fn = target[name]

    descriptor.value = function(){
        console.log(`Calling ${name}`);
        return fn.apply(this,arguments);
    }

}


class Greeter{

    greeting:string;

    constructor(message:string){
        this.greeting = message;
    }

    @logged //decorator
    //Experimental support for decorators is a feature 
   // that is subject to change in a future release. 
    greet(){
        return "Hello, " + this.greeting;
    }

    @logged
    welcome(){
        return "Welcome";
    }
}

let welcome = new Greeter('Steve');
let msg = welcome.greet();
welcome.welcome();
console.log(msg);