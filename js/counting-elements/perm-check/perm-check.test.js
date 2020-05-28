const { permCheck } = require('./perm-check')

describe('Perm Check', () => {
  describe('returns 1 if array A is a permutation and 0 if it is not', () => {
    const A = [4, 2, 1, 3]
    const B = [4, 2, 1]
    it('should return 1', () => {
      const isPermutation = permCheck(A)
      expect(isPermutation).toBe(1)
    })

    it('should return 0', () => {
      const isPermutation = permCheck(B)
      expect(isPermutation).toBe(0)
    })
  })
})
