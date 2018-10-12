var path = require("path");

module.exports = function(app) {

// GET Route /survey
app.get("/", function(req, res) {
    res.send("Start Your Survey!");
    res.sendFile(path.join(__dirname, "../routing/survey.html"));
  });

// Routes
// =============================================================
// Default, catch all-route leads to home page
app.get("/", function(req, res) {
    // res.send("Welcome to the Home Page!")
    res.sendFile(path.join(__dirname, "../routing/home.html"));
  });
  
};