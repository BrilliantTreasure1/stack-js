const Stack = require('../stack') // import کردن Stack با CommonJS

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('push and pop work correctly', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.isEmpty()).toBe(true)
  })

  test('peek returns the top element without removing it', () => {
    stack.push(5)
    stack.push(10)
    expect(stack.peek()).toBe(10)
    expect(stack.size()).toBe(2)
  })

  test('isEmpty returns true for empty stack', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
  })

  test('size returns correct number of elements', () => {
    expect(stack.size()).toBe(0)
    stack.push('a')
    stack.push('b')
    expect(stack.size()).toBe(2)
  })

  test('clear empties the stack', () => {
    stack.push(1)
    stack.push(2)
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
    expect(stack.size()).toBe(0)
  })
})
