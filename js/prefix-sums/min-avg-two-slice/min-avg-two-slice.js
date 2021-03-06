
const minAvgTwoSlice = (A) => {
  var start = 0

  var currentSum = A[0] + A[1]
  var minAvgSlice = currentSum / 2
  for (var i = 2; i < A.length; i++) {
    currentSum += A[i]
    var newAvg = currentSum / 3 // slices of three
    if (newAvg < minAvgSlice) {
      minAvgSlice = newAvg
      start = i - 2
    }

    currentSum -= A[i - 2]

    newAvg = currentSum / 2 // slices of two
    if (newAvg < minAvgSlice) {
      minAvgSlice = newAvg
      start = i - 1
    }
  }

  return start
}

module.exports = {
  minAvgTwoSlice
}
