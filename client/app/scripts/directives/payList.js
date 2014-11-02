angular.module('libertadorApp')

/**
 * Defines a behavior to navigate between the pages.
 * @param {string} url The url to navigate on click.
 */
.directive('payList', [function() {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'views/directives/paylist.html',
      scope: {
        tableConsums: '='
      },
      controller: function($scope) {
        $scope.move = function(index) {
          $scope.$parent.$emit('add-item-to-list', $scope.tableConsums[index]);
          $scope.tableConsums.splice(index, 1);
        };

        $scope.onDropSuccess = function($event, index, array){
          array.splice(index,1);
        };

        $scope.onDrop = function($event, $data, array){
          array.push($data);
        };
      }
    };

  }
]);
