angular.module('libertadorApp')

/**
 * Defines a behavior to navigate between the pages.
 * @param {string} url The url to navigate on click.
 */
.directive('consumption', [function() {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'views/directives/consumption.html',
      scope: {
        tableConsums: '='
      },
      controller: function($scope) {
        $scope.remove = function(index) {
          $scope.tableConsums[index].count = 0;
          $scope.tableConsums.splice(index, 1);
        };

        $scope.discount = function(index) {
          var p = $scope.tableConsums[index];
          if (!angular.isNumber(p.count)) {
            p.count = 0;
          }

          p.count--;

          if (p.count <= 0) {
            $scope.remove(index);
          }
          $scope.$parent.$emit('count-changed');
        };

      }

    };

  }
]);
