import reducer from './../redux/reducer'
import * as actions from './../redux/actions'

const DEFAULT_STATE = {
  user: {},
  contacts: []
}

describe('contacts reducer', () => {
  it('successfully adds new user', () => {
    expect(reducer(DEFAULT_STATE, actions.addContact({
      name: 'Test user',
      phone: '123456'
    }))).toMatchSnapshot()
  })
})

describe('user reducer', () => {
  it('successfully updates user', () => {
    expect(reducer(DEFAULT_STATE, actions.updateUser({
      name: 'test user'
    }))).toMatchSnapshot()
  })
})
