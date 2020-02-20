/*
    -> JavaScript is a single-threaded, synchronous language.
    -> A function that takes long time to run will cause a page to become unresponsive.
*/

//Run the following code on a browser, to see the magic
function hang(seconds) {
    const doneAt = Date.now() + (seconds * 1000);

    while(Date.now < doneAt) {

    }
}

hang(10);