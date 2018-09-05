var http = require('http');

var server = http.createServer(function(req, res) {
  res.end("Hello JSCafe");
});

server.listen(8080, "0.0.0.0", function() {
  //起動後に呼ばれるコールバック
  console.log("Server started");
});