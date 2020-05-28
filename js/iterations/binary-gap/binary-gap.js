const toBinaryString = number => {
  // 2 is the base to use for representing a numeric value as binary
  return number.toString(2)
}

const getMaxGaps = binaryArray => {
  let numberOfZeroes = 0
  let max = 0

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray.charAt(i) === '1') {
      if (numberOfZeroes > max) {
        max = numberOfZeroes
      }
      numberOfZeroes = 0
      continue
    } else {
      numberOfZeroes++
    }
  }
  return max
}

const binaryGap = N => {
  // check if N is a integer and within range
  if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
    return getMaxGaps(toBinaryString(N))
  }

  // default if it doesn't meet the requirements
  return 0
}

module.exports = {
  binaryGap
}
