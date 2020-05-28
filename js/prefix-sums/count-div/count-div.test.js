const { countDiv } = require('./count-div')

describe('Count Div', () => {
  describe(' returns the number of integers within the range [A..B] that are divisible by K', () => {
    const A = 6
    const B = 11
    const K = 2

    const count = countDiv(A, B, K)
    it('should return 3', () => {
      expect(count).toBe(3)
    })
  })
})
