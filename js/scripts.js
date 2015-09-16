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
    $("#turn-score").show();
    $("#roll-score").text(newRoll);
    $("#roll-score").show();
  });

  $("#hold").click(function() {
    event.preventDefault();

    testPlayer.playerScore += testPlayer.turnScore;
    testPlayer.turnScore = 0;

    $("#player-score").text(testPlayer.playerScore);
    $("#turn-score").hide();
    $("#roll-score").hide();
  });
});
