describe("Player", function() {
  it("creates a new player with a name and score", function() {
    var testPlayer = new Player("Sven", 0);
    expect(testPlayer.playerName).to.equal("Sven");
    expect(testPlayer.playerScore).to.equal(0);
  });
});
