function another_demo(){

    let global_variable = 10

    if(true){
        let local_variable = 20
        console.log(global_variable)
        console.log(local_variable)
    }

   // console.log(local_variable)
    console.log(global_variable)

}

another_demo()