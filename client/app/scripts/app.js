'use strict';

/**
 * @ngdoc overview
 * @name libertadorApp
 * @description
 * # libertadorApp
 *
 * Main module of the application.
 */
angular
  .module('libertadorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ang-drag-drop'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/salon', {
        controller: 'SalonCtrl',
        templateUrl: 'views/salon.html'
      })
      .when('/salon/:tableId', {
        controller: 'TableCtrl',
        templateUrl: 'views/table.html'
      })
      .when('/paycheck', {
        controller: 'PaycheckCtrl',
        templateUrl: 'views/paycheck.html'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
