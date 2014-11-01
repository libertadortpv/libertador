'use strict';

/**
 * @ngdoc function
 * @name libertadorApp.controller:LoginCtrl
 * @description
 * # AboutCtrl
 * Controller of the libertadorApp
 */
angular.module('libertadorApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', 'AuthService', 'AUTH_EVENTS', '$location',
    function ($scope, $rootScope, AuthService, AUTH_EVENTS, $location) {
        $scope.credentials = {
          user: '',
          password: ''
        };

        $scope.login = function() {
          AuthService.login($scope.credentials)
            .then(function(user) {
                console.log($scope.credentials);
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $scope.setCurrentUser(user);
                $location.url('/home');
                // $state.go('home');
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };

    }]
);
