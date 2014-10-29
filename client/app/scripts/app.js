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
    'ngTouch'
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
      .when('/404', {
        templateUrl: '/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
