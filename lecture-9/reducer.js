/*const merge = (prev, next) => Object.assign({}, prev, next)

const reducer = (state, update) => merge(state, update)*/

const reducer = (state, update) => ({
    ...state,
    ...update
})

let state = {}
state = reducer(state, {foo: 'foo'})
state = reducer(state, {bar: 'bar'})

console.log(state)