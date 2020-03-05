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
        1. Execution stack (LIFO structure which puts "layer" by "layer" what is called)
        2. Browser APIs (It stores by an amount of time the asynchronous calls)
        3. Function queue (Once the time has happened in Browser API, it moves the commands to the function queue)
        4. Event loop (It checks for the stack. If the stack is empty, it calls what is in the function queue)

    Some examples of asynchronous functions are:
        1. setTimeout()
        2. XMLHttpRequest(), jQuery(), ajax(), fetch()
        3. Database calls

    Anything that relies on other than JavaScript is asynchronous.
*/
