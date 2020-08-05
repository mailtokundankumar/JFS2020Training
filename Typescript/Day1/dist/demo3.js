"use strict";
function demo_varaible_declarations() {
    var age = 21;
    if (true) { //If Block - Local Block to Function Block
        var age_1 = 30; //Modified to 30
        console.log(age_1);
    }
    console.log(age);
}
demo_varaible_declarations();
