/*
The store is responsible for maintening the state, and we can get the current
state by the method getState(), update it with dispatch(), and we can add listeners that get invoked
when the state changes
*/

class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer
        this.state = initialState
    }

    getState() {
        return this.state
    }

    dispatch(update) {
        this.state = this.reducer(this.state, update)
    }
}

const reducer = (state, update) => ({
    ...state,
    ...update
})

const store = new Store(reducer, {})
store.dispatch({foo: 'foo'})
store.dispatch({bar: 'bar'})
console.log(store.getState())

