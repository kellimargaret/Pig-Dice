describe("Player", function() {
  it("creates a new player with a name and score", function() {
    var testPlayer = new Player("Sven", 0);
    expect(testPlayer.playerName).to.equal("Sven");
    expect(testPlayer.playerScore).to.equal(0);
  });

  //will work sometimes, because if random roll = 1 it will be false
  it("updates score for player", function() {
    var testPlayer = new Player("Sven", 0);
    testPlayer.rollDie();
    var randomTest = testPlayer.playerScore < 7 && testPlayer.playerScore > 0;
    expect(randomTest).to.equal(true);
  });

  //will work sometimes, because if random roll = 1 it won't update score
  it("will not update score if player rolls 1", function() {
    var testPlayer = new Player("Sven", 0);
    testPlayer.rollDie();
    expect(testPlayer.playerScore).to.equal(0);
  })

  //player rolls die twice (no 1's) and then holds
  // it("will update player score if multiple rolls of 2-6", function() {
  //   var testPlayer = new Player("Sven", 0);
  //   testPlayer.rollDie();
  //   testPlayer.rollDie();
  //   var randomTest = testPlayer.playerScore >= 4 && testPlayer.playerScore <= 12;
  //   expect(testPlayer.playerScore).to.equal(true);
  // });
});
