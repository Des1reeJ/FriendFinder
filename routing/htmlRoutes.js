// GET Route /survey
app.get("/", function(req, res) {
    res.send("Start Your Survey!");
    res.sendFile(path.join(__dirname, "survey.html"));
  });

// Routes
// =============================================================
// Default, catch all-route leads to home page
app.get("/", function(req, res) {
    // res.send("Welcome to the Home Page!")
    res.sendFile(path.join(__dirname, "home.html"));
  });