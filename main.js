var http = require('http');
var express = require('express');
var socketio = require('socket.io');


var app = express();
var server = http.createServer(app);
var ws = socketio.listen(server);


app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendfile('public/index.html');
});

app.listen(4000);
