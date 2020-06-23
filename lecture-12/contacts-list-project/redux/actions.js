import { retrieveQuote } from './../API'

export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const GET_QUOTE = 'GET_QUOTE'

export const updateUser = update => ({
    type: UPDATE_USER,
    payload: update
})
export const addContact = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})
export const getQuote = () => async dispatch => {
    const quote = await retrieveQuote()

    dispatch({ type: GET_QUOTE, payload: quote })
}
