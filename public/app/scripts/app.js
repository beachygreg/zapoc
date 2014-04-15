/**
 * Created by greg on 15/04/14.
 */
var zapocApp = angular.module('zapocApp', ['ui.bootstrap', 'btford.socket-io', 'ngRoute']);

zapocApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
//      .when('/login', {
//        templateUrl: 'views/login.html',
//        controller: 'LoginController'
//      })
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainController'
      });
  }]);