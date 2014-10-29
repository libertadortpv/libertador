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

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };

    $rootScope.$on('$routeChangeSuccess', function(ev, data) {
      $scope.inHome = $location.url() === '/home';
      $scope.inAdmin = $location.url() === '/admin';
      $scope.inLogin = $location.url() === '/login';
   });
  }
]);
