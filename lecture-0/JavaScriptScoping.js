//Scope means variable lifetime

/*
    Lexical scoping (var): from when they are declared until when their function ends
    Block scoping (const, let): until the next } is reached
*/

//console.log(thisIsAConst) //error

//console.log(thisIsAVar) //undefined -> hoisting
thisIsHoisted()
//thisIsNotHoisted()

thisIsAGlobalVariable = 'Hello Global Variable'

const thisIsAConst = 50
//thisIsAConst = 51 //error

let thisIsALet = 50
thisIsALet = 51
//console.log(thisIsALet)

var thisIsAVar = 50
thisIsAVar = 51

var thisIsAVar = 52

thisIsAVar = 'new value'

//console.log(thisIsAVar)

console.log(thisIsAGlobalVariable)

//Function definitions are hoisted too
function thisIsHoisted() {
    console.log("this is a function declared at the bottom of the file")
}

//Reference error cause the variable does not exist
/*const thisIsNotHoisted = function() {
    console.log("this is not hoisted")
}*/

//Type error cause we are trying to evoke an undefined as a function
var thisIsNotHoisted = function() {
    console.log("this is not hoisted")
}
