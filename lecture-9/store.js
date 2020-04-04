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

