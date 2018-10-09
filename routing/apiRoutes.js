// A GET route with the url /api/friends.
// returns JSON display of possible friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });