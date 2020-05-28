const { permMissingElem } = require('./perm-missing-elem')

describe('PermMissingElem', () => {
  describe('returns the value of the missing element', () => {
    const array = [1, 2, 3, 5]

    const missingElem = permMissingElem(array)
    it('should return 4', () => {
      expect(missingElem).toBe(4)
    })
  })
})
