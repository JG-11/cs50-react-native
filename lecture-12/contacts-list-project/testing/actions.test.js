import * as actions from './../redux/actions'

test('updateUser returns an action', () => {
  expect(actions.updateUser({ name: 'test name' })).toMatchSnapshot()
})
