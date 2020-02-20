function map(arr, fn) {
    const newArr = [];

    /*for(let i = 0; i < arr.length; i++) {
        let val = arr[i];
        newArr.push(fn(val));
    }*/
    arr.forEach(function(element) {
        newArr.push(fn(element));
    });

    return newArr;
}

function addOne(num) {
    return num + 1;
}

const arr = [1, 2, 3];
console.log(map(arr, addOne));