import { greetings } from './index'

describe('greetings', () => {
  it('should say hi to Bob', () => {
    expect(greetings('Bob')).toBe('Hello, Bob!');
  })
})
