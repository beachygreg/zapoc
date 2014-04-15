var http = require('http');
var express = require('express');
var socketio = require('socket.io');


var app = express();
var server = http.createServer(app);
var ws = socketio.listen(server);

app.use(express.static(__dirname + '/public'));

app.listen(4000);
