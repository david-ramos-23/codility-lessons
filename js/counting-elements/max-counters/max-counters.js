const maxCounters = (N, A) => {
  // write your code in JavaScript (Node.js 6.4.0)
  const counters = []
  let maxVal = 0
  let lastMax = 0

  // create all counters initially set to 0,
  for (var i = 0; i < N; i++) counters[i] = 0
  // iterate over array of given integers
  for (var j = 0; j < A.length; j++) {
    // if A[K] = N + 1, then operation K is max counter.
    if (A[j] > N) {
      lastMax = maxVal
      // if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X)
    } else {
      const currentMax = Math.max(lastMax, counters[A[j] - 1])
      counters[A[j] - 1] = currentMax + 1
      maxVal = Math.max(counters[A[j] - 1], maxVal)
    }
  }

  for (var l = 0; l < N; l++) {
    counters[l] = Math.max(counters[l], lastMax)
  }

  return counters
}

module.exports = {
  maxCounters
}
