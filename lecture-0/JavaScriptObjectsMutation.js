const o = {
    a: 'a',
    b: 'b'
}

const o2 = o

o.a = 'new value'

//console.log(o2.a) //reason why: storage by reference

const o3 = Object.assign({}, o2) //shallow copy
o3.b = 'new value'
//console.log(o2.b)

function deepCopy(obj) {
    //check if vals are objects
    //if so, copy that object (deep copy)
    //else, return the value
    const keys = Object.keys(obj)

    const newObj = {}
    for(let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if(typeof obj[key] === 'object') {
            newObj[key] = deepCopy(obj[key])
        } else {
            newObj[key] = obj[key] 
        }
    }

    return newObj
}

o4 = deepCopy(o)
o.a = 'a'
console.log(o.a)
console.log(o4.a)