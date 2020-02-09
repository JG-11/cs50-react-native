/*
    Dynamic typing
    Primitive types:
        number
        null
        boolean
        undefined
        string
        (symbol)
    Objects (arrays, functions)
*/

//Typecasting? Coercion
//Explicit vs Implicit coercion
const x = 42;
const explicit = String(x); //explicit === "42"
const implicit = x + ""; //implicit === "42"

console.log(typeof x)
console.log(typeof explicit)
console.log(typeof null) //particularity from JavaScript

/*
    == coerces the types
    === requires equivalent types
*/
console.log(42 == "42");
console.log(42 === "42");

//https://dorey.github.io/JavaScript-Equality-Table/unified/

/*
    Falsy values:
        undefined
        null
        ""
        +0, -0, 0, NaN
        false
    
    Truthy values:
        {}
        []
        Everything else
*/