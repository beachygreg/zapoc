/**
 * Created by greg on 15/04/14.
 */
var boardControllers = angular.module('boardControllers', []);

boardControllers.controller('BoardController', ['$scope', '$http', function ($scope,$http) {

    $scope.board = {
                    "name": "Main Board",
                    "rooms":[
                        {
                            "name": "room1",
                            "tiles":[{"columns":["0","0","0","0","0","0"]},
                                {"columns":["0","0","0","0","0","0"]},
                                {"columns":["0","0","0","0","0","0"]},
                                {"columns":["0","0","0","0","0","0"]},
                                {"columns":["0","0","0","0","0","0"]}
                            ]
                        }
                    ]
                   };
  }]);