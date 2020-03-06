/*
    1. Control flow with asynchronous calls
    2. Execute function once asynchronous call returns value

    It is a function to handle the value that an asynchronous function returns.
*/

/*function doSomething(callback) {
    callback(1);
}

doSomething(console.log);*/

function doSomethingAsync(callback) {
    setTimeout(function() { callback(1) }, 1000);
}

doSomethingAsync(console.log);