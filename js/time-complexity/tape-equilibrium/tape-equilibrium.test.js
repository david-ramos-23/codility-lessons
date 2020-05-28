const { tapeEquilibrium } = require('./tape-equilibrium')

describe('Tape Equilibrium', () => {
  describe('returns the minimal difference that can be achieved', () => {
    const array = [3, 1, 2, 4, 3]

    const minDiff = tapeEquilibrium(array)
    it('should return 1', () => {
      expect(minDiff).toBe(1)
    })
  })
})
