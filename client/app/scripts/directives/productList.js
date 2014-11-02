angular.module('libertadorApp')

/**
 * Defines a behavior to navigate between the pages.
 * @param {string} url The url to navigate on click.
 */
.directive('productList', ['Products', function(Products) {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'views/productList.html',
      scope: {
        tableConsums: '='
      },
      controller: function($scope) {
        $scope.allProds = [];
        $scope.prods = [];
        $scope.categories = [];

        Products.get().then(function(prods) {
          $scope.allProds = prods.categories;
          $scope.categories = _.keys(prods.categories);
          $scope.prods = prods.categories[$scope.categories[0]]; // fetching first categ
          $scope.selectedCateg = $scope.categories[0];
        });

        $scope.add = function(index) {
          var p = $scope.prods[index];
          if (_.contains($scope.tableConsums, p)) {
            // increment the existing one:
            p.count = p.count ? p.count + 1 : 1;
            $scope.$parent.$emit('count-increased');
          } else {
            $scope.tableConsums.push(p);
          }
        };

        $scope.changeCateg = function(categ) {
          $scope.prods = $scope.allProds[categ];
          $scope.selectedCateg = categ;
        };

      }

    };

  }
]);
