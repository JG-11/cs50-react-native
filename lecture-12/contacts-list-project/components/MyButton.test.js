import React from 'react'
import renderer from 'react-test-renderer'
import MyButton from './MyButton'

describe('MyButton', () => {
  it('renders', () => {
    const button = renderer.create(<MyButton />).toJSON()
    expect(button).toMatchSnapshot()
  })
  
  it('correctly overrides default color', () => {
    const color = 'blue'
    const button = renderer.create(<MyButton color={color}/>).root
    expect(button.props.color).toBe(color)
  })
})
