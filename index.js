var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Ejemplo');
});

app.get('/hola', function (req, res) {
  res.send('HOLA');
});

app.get('/quitate', function (req, res) {
  res.send('quitate perra');
});

app.get('/ayuda', function (req, res) {
  res.send('AYUDA');
});
app.get('/ayuda2', function (req, res) {
  res.send('AYUDA');
});

app.get('/help', function (req, res) {
  res.send('AYUDA');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App escuchando a http://%s:%s', host, port);
});
