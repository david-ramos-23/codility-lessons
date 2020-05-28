const { binaryGap } = require('./binary-gap')

describe('Binary Gap', () => {
  describe('Find longest sequence of zeros in binary representation of an integer', () => {
    const number = 1041
    const binaryGaps = binaryGap(number)

    it('should get 5 as the maximum gaps', () => {
      expect(binaryGaps).toBe(5)
    })
  })
})
