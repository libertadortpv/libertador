'use strict';

/**
 * @ngdoc function
 * @name libertadorApp.controller:PaycheckCtrl
 * @description
 * # AboutCtrl
 * Controller of the libertadorApp
 */
angular.module('libertadorApp')
  .controller('PaycheckCtrl', ['$scope', '$location', '$routeParams',
    function ($scope, $location, $routeParams) {
      var order = $scope.getOrder();
      $scope.tableConsums = order.consums;
      $scope.tableNber = order.tableId;
      $scope.total = order.total;
    }
]);
