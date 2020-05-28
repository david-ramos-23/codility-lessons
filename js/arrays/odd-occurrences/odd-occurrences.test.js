const { oddOccurences } = require('./odd-occurrences')

describe('Odd Occurences', () => {
  describe('returns the value of the unpaired or not repeated numbers.', () => {
    const A = [9, 3, 9, 3, 9, 7, 9]
    const oddNumber = oddOccurences(A)

    it(`given ${A} should return 7`, () => {
      expect(oddNumber).toBe(7)
    })

  })
})
