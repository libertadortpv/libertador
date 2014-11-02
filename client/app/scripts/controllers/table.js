'use strict';

/**
 * @ngdoc function
 * @name libertadorApp.controller:TableCtrl
 * @description
 * # AboutCtrl
 * Controller of the libertadorApp
 */
angular.module('libertadorApp')
  .controller('TableCtrl', ['$scope', '$location', '$routeParams', 'Products',
    function ($scope, $location, $routeParams, Products) {
      $scope.tableNber = $routeParams.tableId;
      $scope.tableConsums = $scope.getOrder() ? $scope.getOrder().consums : [];
      $scope.total = 0;

      var _calculateTotal = function(array) {
        $scope.total = 0;
        array.forEach(function(cons) {
          if (cons.prize) {
            $scope.total += cons.prize * (cons.count || 1);
          }
        });
      };

      $scope.$watchCollection('tableConsums', function(newValue) {
        $scope.total = 0;
        _calculateTotal(newValue);
      });

      $scope.$on('count-changed', function() {
        _calculateTotal($scope.tableConsums);
      });

      $scope.submit = function() {
        var order = _.extend({
          consums: $scope.tableConsums,
          tableId: $scope.tableNber,
          total: $scope.total
        });

        $scope.setOrder(order);
        // Products.submit(order).then(function() {
          $location.url('/paycheck');
        // });
      };
    }
]);
