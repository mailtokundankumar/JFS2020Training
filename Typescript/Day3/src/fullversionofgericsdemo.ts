//Creating Generic Classes
//A generic class is a class that has a GENERIC TYPE PARAMETER.
//A generic type parameter is a placeholder for a type 
//that is specified when the class is used to create a new object.

//Generic type parameters allow classes to be written 
//that operate on a specific type without
// knowing what that type will be in advance.

import { Person, Products } from "./dataTypes";

let peoples = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")
]

let products = [new Products("Running Shoes", 100),
new Products("Hat", 25)
]

//No need of Union Type
//type dataType = Person | Product;
//T is the Generic Type Parameter Placeholder 
//T is referring to UnKNown Type in Advance
//The DataCollections class has been defined with a generic type parameter, 
//which is part of the class declaration
//Constraining Generic Type Values
//Narrowing Down to the Specific Types
//By default, any type can be used for a generic type argument,
//so the compiler treats generic types as any by default, 
//eaning that it won’t let me access the 
//name property on which the getNames method depends without 
//some kind of type narrowing

//I could do the type Narrowing within the getNames method, 
//but a more elegant approach is to restrict the range of types 
//that can be used as the value for the generic type parameter so 
//that the class can be
//instantiated only with types that define the features that the 
//generic class relies


class DataCollections<T extends (Person|Products)>{

    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        //single item push
        this.items.push(newItem);
    }

     getNames(): string[] {
         return this.items.map(item => item.name);
     }

    getItem(index: number): T {
        return this.items[index];
    }

}

// class Demo{

// }
//Generics will ensure for 100% TypeSaftey

let peopleData = new DataCollections<Person>(peoples);

let productData = new DataCollections<Products>(products);
//console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);

console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);

let firstProduct = productData.getItem(0);

console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);


