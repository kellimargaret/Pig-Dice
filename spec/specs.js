describe("Player", function() {
  it("creates a new player with a name and score", function() {
    var testPlayer = new Player("Sven", 0);
    expect(testPlayer.playerName).to.equal("Sven");
    expect(testPlayer.playerScore).to.equal(0);
  });
});

// describe("rollDie", function() {
//   it("returns a random number between 1 and 6", function() {
//     expect(dieRoll()).to.equal();
//   });
// });
