const add = require('./sum.js')

test('sum 1 and 1', () => {
  expect(add(1, 1)).toBe(2)
})

test('sum 3 and 5', () => {
  expect(add(3, 5)).toBe(8)
})

test('sum 400 and 1500', () => {
  expect(add(400, 1500)).toBe(1900)
})
