//What a reducer does, is to take the previous state, and update it (returning a new state)

//Using object spread
const reducer = (state, update) => ({
    ...state,
    ...update
})

/*const merge = (prev, next) => Object.assign({}, prev, next)

const reducer = (state, update) => merge(state, update)*/

let state = {}
state = reducer(state, {foo: 'foo'})
state = reducer(state, {bar: 'bar'})

console.log(state)