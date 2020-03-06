/*
    Async and Await are a way to write properly asynchronous functions in a static way.
    It was introduced in ES2017.
*/

/*
    Task: rewrite using async/await

    Extracted from https://javascript.info/async-await
*/

/*function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
  }

loadJson('no-such-user.json')
    .catch(alert); // Error: 404
*/

async function loadJson(url) {
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    }
        
    throw new Error(response.status);
}

try {
    loadJson('no-such-user.json')
} catch (err) {
    alert(err);
}