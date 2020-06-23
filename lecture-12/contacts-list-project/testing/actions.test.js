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

describe('getQuote returns actions', () => {
    it('dispatches GET_QUOTE', async() => {
      const mockDispatch = jest.fn()

      await actions.getQuote()(mockDispatch)

      expect(mockDispatch.mock.calls[0][0].type).toBe(actions.GET_QUOTE)
    })
})
