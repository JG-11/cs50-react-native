/*Higher-order functions (the most popular are map(), filter(), and reduce()).
These are functions that take other functions as arguments, or return a function.
*/

/*What map does is to take all the single values of an array, and apply a function to them, to return
another array with the new values*/

const x = [1, 2, 3, 4, 5];

function addOne(number) {
    return console.log(number + 1);
}

x.map(addOne);