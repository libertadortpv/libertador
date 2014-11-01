angular.module('libertadorApp')

/**
 * Defines a behavior to navigate between the pages.
 * @param {string} url The url to navigate on click.
 */
.directive('consumption', [function() {
    'use strict';

    return {
      restrict: 'E',
      templateUrl: 'views/consumption.html'
    };

  }
]);
