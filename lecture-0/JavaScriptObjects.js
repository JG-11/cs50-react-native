// Three different ways for declaring objects
const o = new Object()
o.firstName = "Genaro"
o.lastName = "Almaraz"
o.isTeaching = false
o.greet = function() {
    console.log("Hi!")
}

const o2 = {}
o2['firstName'] = "Genaro"
o2['lastName'] = "Almaraz"
o2['isTeaching'] = false
const key = 'greet'
o2[key] = function() {
    console.log("Hi!")
}

//inline
//we can nest objects
const o3 = {
    firstName: "Genaro",
    lastName: "Almaraz",
    isTeaching: false,
    greet: function() {
        console.log("Hi!")
    },
    address: {
        street: "Main St.",
        number: 1234
    }
}

console.log(o2['greet'])
console.log(o.isTeaching)
console.log(o3.address.street)