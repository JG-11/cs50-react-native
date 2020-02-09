const firstName = "Genaro"; //the semicolon is optional
const lastName = 'Almaraz' //single quotes are syntactically correct too

//in an array we can mix different types of data, even functions
const arr = [
    "string",
    42,
    function() { console.log("Hi") }
]
//all elements are separated by a comma

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr[2]()//call and execute my function