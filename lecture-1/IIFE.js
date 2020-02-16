const hello = (function () {
    const message = "Hello";

    function sayHello() {
        console.log(message);
    }

    return sayHello;  
})();

hello();

const counter = (function() {
    let count = 0;

    return {
        increment: function() {
            count += 1;
        },
        get: function() {
            console.log(count);
        }
    }
})();

counter.get();
counter.increment();
counter.get();
counter.increment();
counter.increment();
counter.get();