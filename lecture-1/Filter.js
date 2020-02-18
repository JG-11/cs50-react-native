/*
    What filter() does is to apply a function to a set of values, and returns the values that
    are true, and gets rid of the values that return false
*/

const x = [1, 2, 3, 4, 5];

function isGreaterThanOne(number) {
    return console.log(number > 1);
}

x.filter(isGreaterThanOne);