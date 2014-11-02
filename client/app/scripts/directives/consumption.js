angular.module('libertadorApp')

/**
 * Defines a behavior to navigate between the pages.
 * @param {string} url The url to navigate on click.
 */
.directive('consumption', [function() {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'views/consumption.html',
      scope: {
        tableConsums: '='
      },
      controller: function($scope) {
        $scope.remove = function(index) {
          $scope.tableConsums[index].count = 0;
          $scope.tableConsums.splice(index, 1);
        };

      }

    };

  }
]);
