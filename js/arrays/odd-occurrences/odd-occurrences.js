const oddOccurences = A => {
  // XOR of all elements gives us odd occurring element
  return A.reduce((x, y) => x ^ y)
}

module.exports = {
  oddOccurences
}
