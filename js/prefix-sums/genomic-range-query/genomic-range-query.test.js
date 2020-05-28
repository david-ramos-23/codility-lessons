const { genomicRangeQuery } = require('./genomic-range-query')

describe('Genomic Range Query', () => {
  describe('returns an array consisting of M integers specifying the consecutive answers to all queries', () => {
    const S = 'CAGCCTA'
    const P = [2, 5, 0]
    const Q = [4, 5, 6]

    const genomic = genomicRangeQuery(S, P, Q)
    it('should return [2, 4, 1]', () => {
      const result = [2, 4, 1]
      expect(genomic).toStrictEqual(result)
    })
  })
})
