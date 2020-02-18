/*
    What reduce() does is to take an array of multiple values, and apply a function to them,
    to return a single value. For example it can take a function which expects just two arguments.
*/

const x = [1, 2, 3, 4, 5];

function add(x, y) {
    return x + y;
}

console.log(x.reduce(add));