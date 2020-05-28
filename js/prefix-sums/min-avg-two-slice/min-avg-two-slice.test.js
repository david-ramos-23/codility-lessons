const { minAvgTwoSlice } = require('./min-avg-two-slice')

describe('MinAvgTwoSlice', () => {
  describe('returns the starting position of the slice with the minimal average', () => {
    const A = [4, 2, 2, 5, 1, 5, 8]
    const minAvg = minAvgTwoSlice(A)
    it('should return 1', () => {
      expect(minAvg).toBe(1)
    })
  })
})
