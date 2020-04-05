import { createStore } from 'redux'
import reducer from './reducer'
import { addContact } from './actions'

const store = createStore(reducer)

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
*/

store.dispatch(addContact({name: 'Genaro', phone: '12121212'}))
store.dispatch(addContact({name: 'Leslie', phone: '1212323'}))
store.dispatch(addContact({name: 'Genaro', phone: '121212'}))

export default store