var path = require ("path");

module.exports = function(app) {

    // index route loads index.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // route loads canvas.html
    app.get("/canvas", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/canvas.html"));
    });
  
    // route loads digital.html
    app.get("/digital", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/digital.html"));
    });

    // route loads photography.html
    app.get("/photography", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/photography.html"));
      });
    
    // route loads contact.html
    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });
  
  };
  