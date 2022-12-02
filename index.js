var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Hola Mundo!');
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

app.get('/game', function (req, res) {
  res.send('gam');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App escuchando a http://%s:%s', host, port);
});
