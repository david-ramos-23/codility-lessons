const { genomicRangeQuery } = require('./genomic-range-query')

describe('Genomic Range Query', () => {
  describe(' returns the number of integers within the range [A..B] that are divisible by K', () => {
    const S = 'CAGCCTA'
    const P = [2, 5, 0]
    const Q = [4, 5, 6]

    const genomic = genomicRangeQuery(S, P, Q)
    it('should return 3', () => {
      const result = [2, 4, 1]
      expect(genomic).toStrictEqual(result)
    })
  })
})
