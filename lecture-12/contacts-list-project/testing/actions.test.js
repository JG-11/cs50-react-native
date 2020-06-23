import * as actions from './../redux/actions'
 
describe('updateUser returns an action', () => {
  it('handles name', () => {
    expect(actions.updateUser({ name: 'test name' })).toMatchSnapshot()
  })

  it('handles empty name', () => {
    expect(actions.updateUser({ name: '' })).toMatchSnapshot()
  })

  it('handles empty object', () => {
    expect(actions.updateUser({})).toMatchSnapshot()
  }) 
})
