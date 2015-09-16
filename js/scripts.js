function Player(playerName, playerScore, turnScore) {
  this.playerName = playerName;
  this.playerScore = playerScore;
  this.turnScore = turnScore;
}

Player.prototype.rollDie = function() {
  var dieRoll = Math.floor(Math.random() * 6) + 1;
  if (dieRoll !== 1) {
    this.turnScore += dieRoll;
    return dieRoll;
  }
  return dieRoll;
}

$(document).ready(function() {
  var testPlayer = new Player("Sven", 0, 0);

  $("#roll").click(function() {
    event.preventDefault();

    var newRoll = testPlayer.rollDie();

    $("#turn-score").text(testPlayer.turnScore);
    $("#roll-score").text(newRoll);
  });
});
