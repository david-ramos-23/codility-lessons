const { cyclicRotation } = require('./cyclic-rotation')

describe('Cyclic Rotation', () => {
  describe('rotate array A K times', () => {
    const A = [3, 8, 9, 7, 6]
    const K = 3
    const rotatedArray = [9, 7, 6, 3, 8]
    const test = cyclicRotation(A, K)

    it('should return a rotatedArray', () => {
      expect(test).toEqual(rotatedArray)
    })
    it('given K equal to A.lengh, rotateArray should not be called', () => {
      const A = [1, 0]
      const K = 2
      const rotateArray = jest.fn()
      const test = cyclicRotation(A, K)

      expect(test).toBe(A)
      expect(rotateArray).toHaveBeenCalledTimes(0)
    })
  })
})
