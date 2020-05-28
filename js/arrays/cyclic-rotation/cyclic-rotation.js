const cyclicRotation = (A, K) => {
  const rotateArray = (arr, shiftCount) => [
    ...arr.slice(-shiftCount),
    ...arr.slice(0, -shiftCount)
  ]
  // check if the rotations are equal to array lenght
  const shiftCount = K % A.length

  return shiftCount ? rotateArray(A, shiftCount) : A
}

module.exports = {
  cyclicRotation
}
