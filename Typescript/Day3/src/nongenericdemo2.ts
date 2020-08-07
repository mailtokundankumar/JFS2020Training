import { Person, Products } from "./dataTypes";

let peoples = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")
]

let products = [new Products("Running Shoes", 100),
new Products("Hat", 25)
]

//Special Types in Typescript - UnionType
//Union Types will help you to create a new
//Custom datatype. form the existing datatype
//we will create a new union type
type dataType = Person | Products;

class Demo {

}
//any datatype -> It will not contribute for typesafety 
//let x:dataType = new Person("","");
//let y:dataType = new Products("",123);

class DataCollection {
    private items: dataType[] = [];
    constructor(initialItems: dataType[]) {
        //pushes array of items with the help pf spread opertaor
        //array foreach
        this.items.push(...initialItems);
        // initialItems.forEach((e)=> {
        //     this.items.push(e);
        // });
    }

    add(newItem: dataType) {
        //single item push
        this.items.push(newItem);
    }
    getNames(): string[] {
        return this.items.map(item => item.name);
    }
    getItem(index: number): dataType {
        return this.items[index];
    }
}

let peopleData = new DataCollection(peoples);

console.log(`Names: ${peopleData.getNames().join(", ")}`);

let data = peopleData.getItem(0);
//instanceof operator check for the type
if (data instanceof Person) {
    console.log(`First Person: ${data.name}, ${data.city}`);
} else if(data instanceof Products){
    console.log(`First Product: ${data.name}, ${data.price}`);
}