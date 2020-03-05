//First example of a call stack
/*function a() {
    console.log("Hi");
}

function b() {
    a();
}

function c() {
    b();
}

c();*/

//Second example of a call stack
function addOne(num) {
    //return num + 1;
    //Let's dump the call stack to the console
    throw new Error('Oh no, an error occurred!');
}

function getNum() {
    return addOne(10);
}

function c() {
    console.log(getNum(10) + getNum(10));
}

c();