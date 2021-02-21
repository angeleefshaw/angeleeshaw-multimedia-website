var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
