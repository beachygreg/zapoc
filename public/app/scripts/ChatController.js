angular.module('zapocApp').controller('ChatController', [
  '$scope',
  'socketService',
  'localStorageService',
  function($scope, socketService, $localStorage) {
    $scope.messages = [];
    $scope.players = [];
    $scope.chatConnected = false;
    $scope.nickName = $localStorage.get('nickName');


    if ($localStorage.get('playerUuid')) {
      $scope.playerUuid = $localStorage.get('playerUuid');
      socketService.emit('startChat', { nickName: $scope.nickName, playerUuid: $scope.playerUuid });
    }

    socketService.on('chatConnected', function(data) {
      $scope.chatConnected = true;
      $scope.playerUuid = data.playerUuid;
      $scope.players = data.players;
      $scope.saveLocally();
    });

    $scope.saveLocally = function() {
      $localStorage.set('playerUuid', $scope.playerUuid);
      $localStorage.set('nickName', $scope.nickName);
    };

    socketService.on('joinedChat', function(data) {
      $scope.messages.push({system: true, nickName: data.nickName, message: 'joined!'});
      if (data.players) $scope.players = data.players;
    });

    socketService.on('leftChat', function(data) {
      $scope.messages.push({system: true, nickName: data.nickName, message: 'left!'});
      if (data.players) $scope.players = data.players;
    });

    socketService.on('chat', function(data) {
      $scope.messages.push(data);
    });

    socketService.on('disconnectedChat', function(data) {
      $scope.messages.push({system: true, nickName: data.nickName, message: 'got disconnected!'});
      if (data.players) $scope.players = data.players;
    });

    $scope.connectChat = function() {
      if (!$scope.nickName) return;
      socketService.emit('startChat', { nickName: $scope.nickName, playerUuid: $scope.playerUuid });
    };

    $scope.sendChatMessage = function() {
      socketService.emit('chat', {message: $scope.chatText});
      $scope.chatText = '';
    };

    $scope.onEnter = function(event, callback) {
      if (event.keyCode === 13) callback();
    };

    $scope.disconnectChat = function() {
      socketService.emit('endChat', {});
      $scope.playerUuid = null;
      $scope.saveLocally();
      $scope.chatConnected = false;
      $scope.players = [];
    };
  }
]);
