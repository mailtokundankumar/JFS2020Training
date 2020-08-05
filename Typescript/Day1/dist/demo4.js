"use strict";
function another_demo() {
    var global_variable = 10;
    if (true) {
        var local_variable = 20;
        console.log(global_variable);
        console.log(local_variable);
    }
    // console.log(local_variable)
    console.log(global_variable);
}
another_demo();
