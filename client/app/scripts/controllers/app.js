angular.module('libertadorApp')

.controller('AppController', [
          '$scope', 'USER_ROLES', 'AuthService',
  function($scope,   USER_ROLES,   AuthService) {
    'use strict';

    $scope.currentUser = null;
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.setCurrentUser = function (user) {
      $scope.currentUser = user;
    };
  }
]);
