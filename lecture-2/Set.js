//Set is a data structure that behaves as a list of unique elements.

class Set {
    constructor(arr) {
        this.arr = arr;
    }

    add(val) {
        if(!this.has(val)) {
            this.arr.push(val);
        }
    }

    delete(val) {
        this.arr = this.arr.filter(x => x !== val) //We return a new array
    }

    has(val) {
        return this.arr.includes(val);
    }

    get size() { //Convenient way that JS has (a shortcut to get the size)
        return this.arr.length;
    }
}

const s = new Set([1, 2, 3, 4, 5]);

s.add(1);
console.log(s);
s.delete(1);
console.log(s);
console.log("s has 1? -> ", s.has(1));
console.log("s size: ", s.size);