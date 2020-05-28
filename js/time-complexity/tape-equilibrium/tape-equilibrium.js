const tapeEquilibrium = A => {
  let sumLeft = 0
  let sumRight = A.reduce((acc, i) => acc + i)

  let minDiff = Number.POSITIVE_INFINITY

  for (let p = 0; p < A.length; p++) {
    sumLeft += A[p]
    sumRight -= A[p]

    const diff = sumRight - sumLeft
    minDiff = Math.min(minDiff, Math.abs(diff))
  }

  return minDiff
}

module.exports = {
  tapeEquilibrium
}
