const { frogJump } = require('./frog-jump')

describe('Frog Jump', () => {
  describe('returns the minimal number of jumps from position X to a position equal to or greater than Y', () => {
    const X = 10
    const Y = 85
    const D = 30

    const jumps = frogJump(X, Y, D)
    it('should return 3', () => {
      expect(jumps).toBe(3)
    })
  })
})
