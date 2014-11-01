'use strict';

/**
 * @ngdoc function
 * @name libertadorApp.controller:SalonCtrl
 * @description
 * # AboutCtrl
 * Controller of the libertadorApp
 */
angular.module('libertadorApp')
  .controller('SalonCtrl', ['$scope', '$rootScope', 'AuthService', 'AUTH_EVENTS', '$location',
    function ($scope, $rootScope, AuthService, AUTH_EVENTS, $location) {
        $scope.tables = [{
          id: 1,
          position: 1
        },{
          id: 2,
          position: 2
        },{
          id: 3,
          position: 3
        },{
          id: 4,
          position: 4
        }];

        $scope.hit = function(tableNber) {
          $location.url('/salon/' + tableNber);
        };

    }]
);
