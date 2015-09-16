function Player(playerName, playerScore) {
  this.playerName = playerName;
  this.playerScore = playerScore;
}

function dieRoll() {
  return Math.floor(Math.random() * 6) + 1;
}
