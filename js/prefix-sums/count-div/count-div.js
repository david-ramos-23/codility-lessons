const countDiv = (A, B, K) => {
  // Math.floor needed to pass corner tests.
  return (Math.floor(B / K) - Math.floor((A - 1) / K))
}
module.exports = {
  countDiv
}
