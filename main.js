var http = require('http');
var express = require('express');
var socketio = require('socket.io');
var uuid = require('uuid');
var _ = require('lodash');


var app = express();
var server = http.createServer(app);
var ws = socketio.listen(server);

app.use(express.static(__dirname + '/public'));

var clients = {};
var sockets = {};

function broadcastChat(clients, message, data) {
  _.each(clients, function(client, playerUuid) {
    if (client.socket) {
      client.socket.emit(message, data);
    }
  });
}

function getActivePlayers() {
  return _(clients).filter('socket').pluck('nickName').value();
}

ws.sockets.on('connection', function(socket) {
  socket.on('startChat', function(data) {
    var client;

    if (data.playerUuid) {
      console.log("connected UUID: ", data.playerUuid);
      client = clients[data.playerUuid];
      if (client) client.socket = socket;
    }

    if (!client) {
      client = {
        playerUuid: uuid.v4(),
        nickName: data.nickName,
        socket: socket
      };
      clients[client.playerUuid] = client;
    }

    sockets[socket.id] = client;
    socket.emit('chatConnected', {
      nickName: client.nickName, playerUuid: client.playerUuid,
      players: getActivePlayers()
    });
    broadcastChat(clients, 'joinedChat', {
      nickName: client.nickName,
      players: getActivePlayers()
    });

    socket.on('chat', function(data) {
      broadcastChat(clients, 'chat', {
        nickName: sockets[socket.id].nickName,
        message: data.message
      });
    });

    socket.on('endChat', function(data) {
      var client;
      if (sockets[socket.id]) {
        client = sockets[socket.id];
        delete clients[client.playerUuid];
        delete sockets[socket.id];
        broadcastChat(clients, 'leftChat', {
          nickName: client.nickName,
          players: getActivePlayers()
        });
      }
    });
  });

  socket.on('disconnect', function() {
    var client = sockets[socket.id];
    if (client) {
      delete client.socket;
      broadcastChat(clients, 'disconnectedChat', {
        nickName: client.nickName,
        players: getActivePlayers()
      });
    }
  });
});

server.listen(4000);
