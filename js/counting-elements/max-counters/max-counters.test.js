const { maxCounters } = require('./max-counters')

describe('Frog Jump', () => {
  describe('returns the minimal number of jumps from position X to a position equal to or greater than Y', () => {
    const N = 5
    const array = [3, 4, 4, 6, 1, 4, 4]
    const counters = maxCounters(N, array)

    it('should return [3, 2, 2, 4, 2]', () => {
      const test = [3, 2, 2, 4, 2]
      expect(counters).toStrictEqual(test)
    })
  })
})
