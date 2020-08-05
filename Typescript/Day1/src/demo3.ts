
function demo_varaible_declarations() { //Function Block

    const age = 21;
    if (true) { //If Block - Local Block to Function Block

        const age = 30;  //Modified to 30
        
        console.log(age)
    }
    console.log(age)
}

demo_varaible_declarations();