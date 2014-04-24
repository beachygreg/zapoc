/**
 * Created by greg on 15/04/14.
 */
angular.module('zapocApp').controller('MainController', ['$scope', 'socketService',
  function ($scope,socketService) {

    $scope.sayHello = function(){
      socketService.emit('say:hi', {
          hi: "what is up!!"
        }, function (result) {
          if (!result) {
            alert('There was an error changing your name');
          } else {

            alert('We send a message!!');
          }
        });
    };

    socketService.on('say:hi', function (data) {
      $scope.test = {
        hi:data
      };
    });
  }]);
