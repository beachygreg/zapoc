/**
 * Created by greg on 15/04/14.
 */
var zapocApp = angular.module('zapocApp', ['ui.bootstrap', 'btford.socket-io', 'ngRoute', 'LocalStorageModule']);

zapocApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/board',{
        templateUrl: 'app/views/board.html',
        controller: 'BoardController'
      })
      .otherwise({
        templateUrl: 'app/views/main.html',
        controller: 'MainController'
      });
  }]);
