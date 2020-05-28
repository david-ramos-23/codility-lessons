const { frogRiverOne } = require('./frog-river-one')

describe('Frog Jump', () => {
  describe('returns the earliest time when the frog can jump to the other side of the river', () => {
    const X = 5
    const leaves = [1, 3, 1, 4, 2, 3, 5, 4]

    const time = frogRiverOne(X, leaves)
    it('should return 6', () => {
      expect(time).toBe(6)
    })
  })
})
