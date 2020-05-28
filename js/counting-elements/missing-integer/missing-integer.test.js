const { missingInteger } = require('./missing-integer')

describe('Missing Integer', () => {
  describe('returns the smallest positive integer (greater than 0) that does not occur in A', () => {
    it('Given A = [1, 2, 3], the function should return 4.', () => {
      const A = [1, 2, 3]
      const jumps = missingInteger(A)
      expect(jumps).toBe(4)
    })

    it('Given A = [-1, -3], the function should return 1', () => {
      const A = [-1, -3]
      const jumps = missingInteger(A)
      expect(jumps).toBe(1)
    })
  })
})
