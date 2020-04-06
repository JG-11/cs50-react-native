//Action types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'
const LOG_IN_SENT = 'LOG_IN_SENT'
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
const LOG_IN_REJECTED = 'LOG_IN_REJECTED'

class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer
        this.state = initialState
    }

    getState() {
        return this.state
    }

    dispatch(action) {
        if(typeof action === 'function') {
            action(this.dispatch.bind(this))
        } else {
            this.state = this.reducer(this.state, action)
        }
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

//Async action creator
const logInUser = () => dispatch => {
    dispatch({type: LOG_IN_SENT})
    fetch().then(() => {
        dispatch({type: LOG_IN_SUCCESS})
    }).catch(err => {
        dispatch({type: LOG_IN_REJECTED})
    })
}

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