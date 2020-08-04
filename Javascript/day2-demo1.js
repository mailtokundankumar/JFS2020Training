var value = function() {
    return 10
}
x = value()

// console.log(x)

function add(fn){

    var x = 20
    var y = fn()

    return x+y
}

var result = add(value)
//console.log(result)


// Callback Function

var numbers = [1,2,3,4,5]

// numbers.forEach(function(n){
//     console.log(n)
// })
//Lambda Expressions - Java 8 Arrow Token
//Pathway for implementing the Functional Programming
var sum = (x,y) => x+y

console.log(sum(10,20))
//One Liner Of Statement
numbers.forEach((n)=> {
    console.log(n)
    console.log(n+1)
})