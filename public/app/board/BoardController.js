/**
 * Created by greg on 15/04/14.
 */
var boardControllers = angular.module('boardControllers', []);

boardControllers.controller('BoardController', ['$scope', function ($scope) {
    $scope.board = {
                    'name': 'Main Board'
                   };
  }]);