
var express = require('express');
var app = express();
var request = require('request')
var qs = require('querystring')
var bodyParser = require('body-parser')



app.use(express.static('client'));
app.use(express.static('bower_components'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var prodPort = process.env.PORT || 8080
var server = app.listen(prodPort, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
}); 

var options = {
  url: 'https://api.forecast.io/forecast/9123b58e7fc6aa24b65630193e1153a9/',
  headers: {'User-Agent': 'request'}
};

app.post('/hallo', function(req, res) {
  console.log('3. postyheard')
  var latlng = req.body.latlng;
  options.url = 'https://api.forecast.io/forecast/9123b58e7fc6aa24b65630193e1153a9/' + latlng;
  var weather = {temperature: 0, summary: 0};

  function callback(error, response, body) {
    console.log('4. callback made')
    if (!error && response.statusCode == 200) {
      console.log('4. hi')
      var info = JSON.parse(body);
      weather.temperature = info.currently.temperature;
      weather.summary = info.currently.summary;
      res.send([info.currently.temperature, info.currently.summary]);
     }
  };
});





