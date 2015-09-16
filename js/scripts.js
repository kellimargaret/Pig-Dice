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
  var player1;
  var player2;
  var newGame;

  $("#start-button").click(function() {
    event.preventDefault();
    var player1Name = $("input#name-player1").val();
    player1 = new Player(player1Name, 0, 0);

    var player2Name = $("input#name-player2").val();
    player2 = new Player(player2Name, 0, 0);

    newGame = new Game(1, player1, player2);


    $("#game-form").hide();
    $("#game-board").show();

    $("#player1-display-name").text(player1Name);
    $("#player2-display-name").text(player2Name);
  });

  $(".roll").click(function() {
    event.preventDefault();
    var currentPlayer;

    if (newGame.turn === 1) {
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }

    var newRoll = currentPlayer.rollDie();

    if(newRoll === 1) {
      if (newGame.turn ===1) {
        newGame.turn = 2;
        $("#roll-player1").hide();
        $("#hold-player1").hide();
        $("#roll-player2").show();
        $("#hold-player2").show();
      } else {
        newGame.turn = 1;
        $("#roll-player2").hide();
        $("#hold-player2").hide();
        $("#roll-player1").show();
        $("#hold-player1").show();
      }
    }

    $("#turn-score").text(currentPlayer.turnScore);
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
});
