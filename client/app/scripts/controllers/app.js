angular.module('libertadorApp')

.controller('AppController', [
          '$scope', '$rootScope', 'USER_ROLES', 'AuthService', '$location',
  function($scope,   $rootScope,   USER_ROLES,   AuthService,   $location) {
    'use strict';

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
  }
]);
