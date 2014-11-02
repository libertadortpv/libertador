angular.module('libertadorApp')

/**
 * Defines a behavior to navigate between the pages.
 * @param {string} url The url to navigate on click.
 */
.directive('clientBox', [function() {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'views/directives/clientBox.html',
      scope: {
        tableConsums: '='
      },
      controller: function($scope) {
        $scope.boxes = [{
          clientId: '',
            name: 'some box name',
            consums: [{
              name: 'asdasdasd'
            }]
        }];
        $scope.activeBox = null;

        $scope.addBox = function() {
          $scope.boxes.push({
            clientId: '',
            name: 'some box name',
            consums: [{
              name: 'asdasdasd'
            }, {
              name: 'asasdddddddddddddddddd'
            }]
          });
        };

        $scope.activateBox = function(index) {
          $scope.activeBox = $scope.boxes[index];
        };

        $scope.$on('add-item-to-list', function(prod) {
          $scope.activeBox.consums.push(prod);
        });

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
