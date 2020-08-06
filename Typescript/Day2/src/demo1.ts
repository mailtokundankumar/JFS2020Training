class Product {

    constructor(public name: string, public price: string) {
        //console.log("Parent Product Class Constructor");
    }

    public toString() {
        //var ceo:string = "Stevejobs";
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }

}
//Classes can only extend a single class.
//Supporting only Single Inheritance
//1.Single Inheritance
//2. Muti-Level Inheritance are supported
class TaxedProduct extends Product {

    //taxRate:number;
    //Constructors for derived classes must contain a 'super' call.
    constructor(name: string, price: string, public taxRate = 1.2) {
        super(name, price); //super keyword need to be used in calling super class constructor
        //this.taxRate = taxRate;
        //console.log("Child TaxProduct Class Constructor");
    }

    public getPriceIncTax(){
        //let x:boo
        return Number(this.price) * this.taxRate;
        
    }
    //overriden
    public toString() {
        //var ceo:string = "Stevejobs";
        //super keyword is also used to call the base class member functions
       // return super.toString() `  TaxRate For Products:${this.taxRate}`;
       let chainResult = super.toString();
       return `${chainResult}, Tax: ${this.getPriceIncTax()}`; 
    }

    //staic method
    //Spread Operator
    //Type Safe
    //VarArgs
    //kwArgs
    //static methods are called as class methods
    static process(...products:Product[]){

            //products vairable is an Product Array 
            //forEach method of an array object will help us in
            //iterating the sequence of array elements
          //products[hat,boots]  
          //products.forEach( (p) => console.log(p.toString()) ); 
          products.forEach( p => console.log(p.toString()) ); 
    }
}

// let hat = new TaxedProduct("Hat","100");
// let boots = new TaxedProduct("Boots","200",1.3);
// let watch = new TaxedProduct("Watch","450",1.4);
//whenever you have an array representation you got to use []
//hat.process(hat,boots,watch);
//TaxedProduct.process(hat,boots,watch);
//javascript object in key value paired
//key will always stay as String
// let data = {
//  hat: new TaxedProduct("Hat","100"),
//  boots: new TaxedProduct("Boots","200",1.3),
//  watch: new TaxedProduct("Watch","450",1.4),
// }

// Object.keys(data).forEach(key => console.log(data[key].toString()))
//Object.values(data) collection of values
//data.iPad = new TaxedProduct("Boots","200",1.3);
//Object.keys collects all keys from the given list
//Object.keys(data).forEach(d => console.log(typeof d))
//console.log( )

// Storing the Data by Key using Map Objects
// Its easy to use a basic collections but
// limitations in javscript object is key should be in string
// Javascript also provides the Map through which you can store data using
// keys of any type -Purpose Built

let data = new Map();


   data.set("hat",new TaxedProduct("Hat","100"));
   data.set("boots", new TaxedProduct("Boots","200",1.3));
   data.set("watch", new TaxedProduct("Watch","450",1.4));
   
//    3
//    [Map Iterator] { 'hat', 'boots', 'watch' }

  //console.log(data.size);
  //console.log(data.keys())
  //console.log([...data.keys()]);
   [...data.keys()].forEach(key => console.log(data.get(key).toString()));
    // data.forEach((value,key) => {
    //     console.log(key);
    //     console.log(value.toString())
    // });
   //Object.keys(data).forEach(key => console.log(data[key].toString()))



//console.log(hat.toString());
//console.log(boots.toString());