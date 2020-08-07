import { Person, Products } from "./dataTypes";

let peoples = [new Person("Bob Smith","London"),
    new Person("Dora Peters","New York")
    ]

let products = [new Products("Running Shoes",100),
    new Products("Hat",25)
]
//Generics is helping to implement the concept of DRY - DoNot Repeat Yourself
class PeopleCollection {
    private items: Person[] = [];
    
    constructor(initialitems:Person[]){
        this.items.push(...initialitems);
    }

    add(newItem:Person){
        this.items.push(newItem);
    }

    getNames():String[]{
        return this.items.map(item=>item.name);
    }

    getItem(index:number):Person{
        return this.items[index];
    }
}

let peopleData = new PeopleCollection(peoples);

console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);


console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);