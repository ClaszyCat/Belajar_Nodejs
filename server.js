var app = require("./controller/app.js");
var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log("Web App Hosted at http://localhost:%s", port);
});
