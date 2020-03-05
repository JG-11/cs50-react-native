/*
    JavaScript has functions that act asynchronously (such as setTimeout).

    Synchronous basically means that you can only execute one thig at a time.
    Asynchronous means that you can execute multiple things at a time and you don't
    have to finish executing the current thing in order to move on to the next one.

    Reference: https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean
*/

function printOne() {
    console.log(1);
}

function printTwo() {
    console.log(2);
}

function printThree() {
    console.log(3);
}

setTimeout(printOne, 1000);
setTimeout(printTwo, 500);
printThree();

/*
    How can a language be synchronous and asynchronous at the same time?

    In order to explain that, we have to explain the following concepts:
        1. Execution stack
        2. Browser APIs
        3. Function queue
        4. Event loop
*/
