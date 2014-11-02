angular.module('libertadorApp')

/**
 * Defines a behavior to navigate between the pages.
 * @param {string} url The url to navigate on click.
 */
.directive('clientBox', ['Clients', function(Clients) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'views/directives/clientBox.html',
      scope: {
        tableConsums: '='
      },
      controller: function($scope) {
        $scope.boxes = [{
          client: {},
          name: '1',
          consums: []
        }];

        $scope.activeBox = null;
        $scope.clients = []; // list of clients.

        Clients.get().then(function(clients) {
          $scope.clients = clients;
        });

        $scope.addBox = function() {
          $scope.boxes.push({
            client: {},
            name: $scope.boxes.length + 1,
            consums: []
          });
        };

        $scope.activateBox = function(index) {
          $scope.activeBox = $scope.boxes[index];
        };

        $scope.$on('add-item-to-list', function(prod) {
          $scope.activeBox.consums.push(prod);
        });

        $scope.onDropSuccess = function($event, index, array) {
          array.splice(index,1);
        };

        $scope.onDrop = function($event, $data, array) {
          array.push($data);
        };

        // remove box
        $scope.remove = function(index) {
          var consums = $scope.boxes[index].consums;
          $scope.boxes.splice(index, 1);
          // restoring the consumisions:
          consums.forEach(function(cons) {
            $scope.tableConsums.push(cons);
          });
        };
      }
    };

  }
]);
