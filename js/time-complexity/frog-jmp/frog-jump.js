const frogJump = (currentPos, finalPos, lenghtJump) => {
  return Math.ceil((finalPos - currentPos) / lenghtJump)
}
module.exports = {
  frogJump
}
