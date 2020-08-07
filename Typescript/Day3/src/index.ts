import {Person,Products} from "./dataTypes"

let peoples = [new Person("Bob Smith","London"),
    new Person("Dora Peters","New York")
    ]

let products = [new Products("Running Shoes",100),
    new Products("Hat",25)
]

products.forEach(p=>{console.log(`${p.name}`)})

peoples.forEach(p=>{console.log(`${p.name}`)})