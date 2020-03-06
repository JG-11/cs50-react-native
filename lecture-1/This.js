const person = {
    name: "Genaro",
    greet: function() {
        console.log("Hi " + this.name);
    }
}

person.greet();

const greet = person.greet;

const friend = {
    name: "Josue"
}

greet();

friend.greet = person.greet;
friend.greet();

//Setting 'this' mannually
const newGreet = friend.greet.bind({ name: "This is a bound object" }); //Bind returns a function
newGreet();

//Call and Apply immediately invoke the function
friend.greet.apply({ name: "apply()" });
friend.greet.call({ name: "call()" });

//Using ES6 arrow function, but it will set the value at the time we declare the function, rather than when we call it
const newPerson = {
    name: "newPerson",
    greet: () => {
        console.log(this.name);
    }
}

newPerson.greet();