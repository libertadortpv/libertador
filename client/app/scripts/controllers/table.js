'use strict';

/**
 * @ngdoc function
 * @name libertadorApp.controller:TableCtrl
 * @description
 * # AboutCtrl
 * Controller of the libertadorApp
 */
angular.module('libertadorApp')
  .controller('TableCtrl', ['$scope', '$rootScope', 'AuthService', 'AUTH_EVENTS', '$location',
    function ($scope, $rootScope, AuthService, AUTH_EVENTS, $location) {
        $scope.tableNber = 50;

    }]
);
