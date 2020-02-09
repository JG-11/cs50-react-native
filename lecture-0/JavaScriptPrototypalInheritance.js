const arr = []
//Array.prototype.push()
arr.push("value_0")
console.log(arr)

const s = "string"
//String.prototype.toUpperCase()
console.log(s.toUpperCase())

console.log(s.__proto__)
//s.__proto__.__proto__

/*
    Most primitive types have object wrappers
        String()
        Number()
        Boolean()
        Object()
        (Symbol())

    JS will automatically "box" (wrap) primitive values so you have access to methods
        42.toString() -> error
*/

const number = 42
console.log(number.toString())
console.log(number.__proto__)

console.log(number instanceof Number)//false

//There exists danger when we modify the prototype of an object
Number.prototype.toString = function() {
    return "100"
}

console.log(number.toString())
