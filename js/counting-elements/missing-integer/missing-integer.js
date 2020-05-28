const missingInteger = (A) => {
  let expecterNumber = 1

  A.sort((a, b) => {
    return a - b
  })

  for (const i in A) {
    // negative and repeated numbers
    if (A[i] <= 0 || A[i] === A[i - 1]) continue
    if (A[i] !== expecterNumber) break

    expecterNumber++
  }

  return expecterNumber
}

module.exports = {
  missingInteger
}
