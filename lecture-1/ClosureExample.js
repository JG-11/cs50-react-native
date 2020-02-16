function makeHelloMessage() {
    const message = "Hello!";

    function sayHello() {
        console.log(message);
    }

    return sayHello;
}
//console.log(message);
const hello = makeHelloMessage();

//console.log(typeof hello);

hello();