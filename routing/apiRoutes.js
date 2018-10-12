// A GET route with the url /api/friends.
// returns JSON display of possible friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

// A POST routes /api/friends
// handle incoming survey results and used to handle compatibility logic
app.post("/api/friends", function(req, res) {
    finderArray.push(req.body);
    res.json(true);
});