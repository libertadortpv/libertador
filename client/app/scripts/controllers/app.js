angular.module('libertadorApp')

.controller('AppController', [
          '$scope', '$rootScope', 'USER_ROLES', 'AuthService', '$location',
  function($scope,   $rootScope,   USER_ROLES,   AuthService,   $location) {
    'use strict';

    var tableOrder = null; // cache of the order

    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;
    $scope.inHome = false;
    $scope.inAdmin = false;
    $scope.inLogin = false;
    $scope.inSalon = false;

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

    $rootScope.$on('$routeChangeStart', function(ev) {
      if (!AuthService.isAuthorized()) {
        ev.preventDefault();
        $location.url('/login');
      }
    });

    $rootScope.$on('$routeChangeSuccess', function() {
      $scope.inHome = $location.url() === '/home';
      $scope.inAdmin = $location.url() === '/admin';
      $scope.inLogin = $location.url() === '/login';
      $scope.inSalon = $location.url() === '/salon';
   });

    $scope.logout = function() {
      AuthService.logout();
    };

    $scope.setOrder = function(order) {
      tableOrder = order;
    };

    $scope.getOrder = function() {
      return tableOrder;
    };
  }
])

.filter('camelcase', function() {
  'use strict';
  return function(input) {
    input = input || '';
    return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };
});
