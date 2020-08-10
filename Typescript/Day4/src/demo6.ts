interface TeslaModelS {
    length: number;
   // An interface property cannot have an initializer
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    getTyrePressure?: () => number;
    getRemCharging: () => number;
  }

//generics are only a placeholder of any genric type acceptance
// class duck<T extends TeslaModelS>{

//     sing(){

//     }
// }



interface demo2{

}
class Tesla implements TeslaModelS,demo2{

    seatingCapacity=30;
    length=10;
    width = 10;
    wheelbase=20;
    //class own additional property
    sabari = "trainer";

    getRemCharging(){
        return 10;
    }
}
//'TeslaModelS' only refers to a type,
 //but is being used as a value here
//new TeslaModelS();