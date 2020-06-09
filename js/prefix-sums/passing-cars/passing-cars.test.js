const { passingCars } = require('./passing-cars')

describe('PassingCars', () => {
  describe('returns the number of pairs of passing cars', () => {
    const A = [0, 1, 0, 1, 1]
    const cars = passingCars(A)
    it('should return 5', () => {
      expect(mincarsAvg).toBe(1)
    })
  })
})
