import * as actions from './../redux/actions'

test('updateUser returns an action', () => {
  expect(actions.updateUser({ name: 'test name' })).toEqual({
	  type: actions.UPDATE_USER,
	  payload: { name: 'test name'}
  })
  
  expect(actions.updateUser({ phone: '1234' })).toEqual({
          type: actions.UPDATE_USER,
	  payload: { phone: '1234' }
  })
})
