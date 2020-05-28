const frogRiverOne = (X, A) => {
  const leaves = {}

  for (let second = 0; second < A.length; second++) {
    const position = A[second]
    if (position > X) continue
    if (leaves[position] === undefined || leaves[position] > second) {
      leaves[position] = second
    }
  }

  let maxTime = 0
  for (let i = 1; i < X + 1; i++) {
    if (leaves[i] === undefined) {
      return -1
    } else if (maxTime < leaves[i]) {
      maxTime = leaves[i]
    }
  }

  return maxTime
}
module.exports = {
  frogRiverOne
}
