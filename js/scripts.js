function Player(playerName, playerScore) {
  this.playerName = playerName;
  this.playerScore = playerScore;
}

Player.prototype.rollDie = function() {
  var dieRoll = Math.floor(Math.random() * 6) + 1;
  if (dieRoll !== 1) {
    return this.playerScore += dieRoll;
  }
}
