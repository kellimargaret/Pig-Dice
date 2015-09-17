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

//we can probably do this in other places
Game.prototype.switchPlayers = function() {
  if (this.turn ===1) {
    this.turn = 2;
    $("#roll-player1").hide();
    $("#hold-player1").hide();
    $("#roll-player2").show();
    $("#hold-player2").show();
  } else {
    this.turn = 1;
    $("#roll-player2").hide();
    $("#hold-player2").hide();
    $("#roll-player1").show();
    $("#hold-player1").show();
  }
}

Game.prototype.hideDice = function() {
  $("#dice-1").hide();
  $("#dice-2").hide();
  $("#dice-3").hide();
  $("#dice-4").hide();
  $("#dice-5").hide();
  $("#dice-6").hide();
}


$(document).ready(function() {
  var player1;
  var player2;
  var newGame;
  var currentPlayer;

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

    $("#player1-score").text(player1.playerScore);
    $("#player2-score").text(player2.playerScore);

    $("#roll-player1").show();
    $("#hold-player1").show();
    $("#roll-player2").hide();
    $("#hold-player2").hide();
  });

  $(".roll").click(function() {
    event.preventDefault();

    newGame.hideDice();

    if (newGame.turn === 1) {
      currentPlayer = player1;
    } else {
      currentPlayer = player2;
    }

    var newRoll = currentPlayer.rollDie();


    //dice not hiding fast enough!!!!
    if(newRoll === 1) {
      newGame.switchPlayers();
      $("#dice-1").addClass('animated rollIn');
      $("#dice-1").show();
    } else if (newRoll === 2) {
      $("#dice-2").addClass('animated rollIn');
      $("#dice-2").show();
    } else if (newRoll === 3) {
      $("#dice-3").addClass('animated rollIn');
      $("#dice-3").show();
    } else if (newRoll === 4) {
      $("#dice-4").addClass('animated rollIn');
      $("#dice-4").show();
    } else if (newRoll === 5) {
      $("#dice-5").addClass('animated rollIn');
      $("#dice-5").show();
    } else if (newRoll === 6) {
      $("#dice-6").addClass('animated rollIn');
      $("#dice-6").show();
    }

    $("#turn-score").text(currentPlayer.turnScore);
    $("#turn-score").show();
  });

  $(".hold").click(function() {
    event.preventDefault();

    if (newGame.turn === 1) {
      newGame.turn = 2;
      player1.playerScore += player1.turnScore;
      player1.turnScore = 0;
      $("#player1-score").text(player1.playerScore);
      $("#roll-player1").hide();
      $("#hold-player1").hide();
      $("#roll-player2").show();
      $("#hold-player2").show();
      if (player1.playerScore >= 3) {
        $("#game-board").hide();
        $("#winner-board").show();
        $("#winner-name").text(player1.playerName.toUpperCase());
        $("#loser-name").text(player2.playerName);
        $("#point-difference").text(player1.playerScore - player2.playerScore);
      }
    } else {
      newGame.turn = 1;
      player2.playerScore += player2.turnScore;
      player2.turnScore = 0;
      $("#player2-score").text(player2.playerScore);
      $("#roll-player2").hide();
      $("#hold-player2").hide();
      $("#roll-player1").show();
      $("#hold-player1").show();
      if (player2.playerScore >= 3) {
        $("#game-board").hide();
        $("#winner-board").show();
        $("#winner-name").text(player2.playerName.toUpperCase());
        $("#loser-name").text(player1.playerName);
        $("#point-difference").text(player2.playerScore - player1.playerScore);
      }
    }

    $("#turn-score").hide();
    $("#roll-score").hide();
  });

  $("#play-again").click(function() {
    event.preventDefault();

    newGame.hideDice();

    player1.playerScore = 0;
    player2.playerScore = 0;

    $("#player1-score").text(player1.playerScore);
    $("#player2-score").text(player2.playerScore);

    if (newGame.turn === 1) {
      $("#roll-player1").show();
      $("#hold-player1").show();
      $("#roll-player2").hide();
      $("#hold-player2").hide();
    } else {
      $("#roll-player2").show();
      $("#hold-player2").show();
      $("#roll-player1").hide();
      $("#hold-player1").hide();
    }

    $("#winner-board").hide();
    $("#game-board").show();
  });

  $("#new-game").click(function() {
    event.preventDefault();

    newGame.hideDice();

    $("#winner-board").hide();
    $("#game-form").show();

    $("input#name-player1").val("");
    $("input#name-player2").val("");
  });
});
