var express = require('express');
var app = express();
app.use(express.static('client'));
app.use(express.static('bower_components'));
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var prodPort = process.env.PORT || 8080
var server = app.listen(prodPort, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});