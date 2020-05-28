
const genomicRangeQuery = (S, P, Q) => {
  let dna = ''
  const ans = []

  for (let i = 0; i < P.length; i++) {
    dna = S.slice(P[i], Q[i] + 1)

    if (dna.indexOf('A') !== -1) {
      ans.push(1)
    } else if (dna.indexOf('C') !== -1) {
      ans.push(2)
    } else if (dna.indexOf('G') !== -1) {
      ans.push(3)
    } else {
      ans.push(4)
    }
  }
  return ans
}

module.exports = {
  genomicRangeQuery
}
