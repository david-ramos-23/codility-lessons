const permMissingElem = (array) => {

  if (arrray.length === 0) return 1

  const requiredSum = (array.length + 1) * (array.length + 2) / 2

  const actualSum = array.reduce((actualSum, i) => actualSum + i)

  return requiredSum - actualSum
}

module.exports = {
  permMissingElem
}
