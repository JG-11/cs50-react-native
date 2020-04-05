//Action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

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

const DEFAULT_STATE = {
    user: {},
    contacts: []
}

const merge = (state, update) => ({
    ...state,
    ...update
})

//Action creators
const updateUser = update => ({
    type: UPDATE_USER,
    payload: update
})
const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

//Solving scalability problem, sending all our actions to a global reducer
//Every single reducer can respond now to every single action
const userReducer = (state, action) => {
    if(action.type === UPDATE_USER) {
        return merge(state, action.payload)
    }

    if(action.type === UPDATE_CONTACT) {
        return merge(state, { prevContact: action.payload })
    }
    
    return state
}

const contactReducer = (state, action) => {
    if(action.type === UPDATE_CONTACT) {
        return [...state, action.payload]
    }

    return state
}

const reducer = (state, action) => ({
    user: userReducer(state.user, action),
    contacts:  contactReducer(state.contacts, action)
})

const store = new Store(reducer, DEFAULT_STATE)
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))

store.dispatch(addContact({name: 'Genaro', phone: '12121212'}))
store.dispatch(addContact({name: 'Leslie', phone: '1212323'}))
store.dispatch(addContact({name: 'Genaro', phone: '121212'}))

console.log(store.getState())