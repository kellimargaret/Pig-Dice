function Player(playerName, playerScore, turnScore) {
  this.playerName = playerName;
  this.playerScore = playerScore;
  this.turnScore = turnScore;
}

Player.prototype.rollDie = function() {
  var dieRoll = Math.floor(Math.random() * 6) + 1;
  if (dieRoll === 1) {
    this.turnScore = 0;
    return dieRoll;
  }
  this.turnScore += dieRoll;
  return dieRoll;
}

function Game(turn, player1, player2) {
  this.turn = turn;
  this.player1 = player1;
  this.player2 = player2;
}

$(document).ready(function() {
  var testPlayer = new Player("Sven", 0, 0);

  $(".roll").click(function() {
    event.preventDefault();

    var newRoll = testPlayer.rollDie();
    if(newRoll === 1) {
      // $("#roll-player1").hide();
      // $("#hold-player1").hide();
    }

    $("#turn-score").text(testPlayer.turnScore);
    $("#turn-score").show();
    $("#roll-score").text(newRoll);
    $("#roll-score").show();
  });

  $(".hold").click(function() {
    event.preventDefault();

    testPlayer.playerScore += testPlayer.turnScore;
    testPlayer.turnScore = 0;

    $("#player-score").text(testPlayer.playerScore);
    $("#turn-score").hide();
    $("#roll-score").hide();
  });


  $("#start-button").click(function() {
    event.preventDefault();

    var player1Name = $("input#name-player1").val();
    var player1 = new Player(player1Name, 0, 0);

    var player2Name = $("input#name-player2").val();
    var player2 = new Player(player2Name, 0, 0);

    var newGame = new Game(1, player1, player2);

    $("#game-form").hide();
    $("#game-board").show();

    $("#player1-display-name").text(player1Name);
    $("#player2-display-name").text(player2Name);
  });
});
