/*
    Promises are a way to alliviate "callback hell" situation, allowing us to
    handle the answer and error of an asynchronous function within just one function
    for each.
*/

const url = '';

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        return({
            importantData: json.importantData
        });
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        //Handle error
    });