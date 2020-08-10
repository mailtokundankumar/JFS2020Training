//When the compiler next compiles the TypeScript files,
 //it will also generate a map file, 
 //which has the map file extension, alongside the 
//JavaScript files in the dist folder.

function sum(...x:number[]){
    return x[0]+x[1]+x[2];
}

let printMessage = (msg: string): void => console.log(`Message: ${msg}`);
let message = ("Hello, TypeScript");
printMessage(message);

debugger;
let total = sum(100, 200, 300);
console.log(`Total: ${total}`)