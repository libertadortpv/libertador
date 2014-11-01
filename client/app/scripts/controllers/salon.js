'use strict';

/**
 * @ngdoc function
 * @name libertadorApp.controller:SalonCtrl
 * @description
 * # AboutCtrl
 * Controller of the libertadorApp
 */
angular.module('libertadorApp')
  .controller('SalonCtrl', ['$scope', '$route', 'AuthService', 'AUTH_EVENTS', '$location',
    function ($scope, $route, AuthService, AUTH_EVENTS, $location) {
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
        },{
          id: 5,
          position: 5
        },{
          id: 6,
          position: 6
        },{
          id: 7,
          position: 7
        },{
          id: 8,
          position: 8
        }];

        $scope.hitted = [];

        $scope.tables.forEach(function(table) {
          $scope.hitted[table.id] = false;
        });

        $scope.hit = function(tableNber) {
          $scope.hitted[tableNber] = true;
          setTimeout(function() { // waiting for animation...
            $location.url('/salon/' + tableNber);
            $route.reload();
          }, 400);
        };

    }]
);
