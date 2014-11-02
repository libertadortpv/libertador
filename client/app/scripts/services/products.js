
angular.module('libertadorApp')

.factory('Products', ['Urls', '$resource', function(Urls, $resource) {
    'use strict';

    var Products = $resource(Urls.products, {});
    var Order = $resource(Urls.order, {});

    return {
      get: function() {
        return Products.get().$promise;
      },
      submit: function(order) {
        return Order.save(order);
      }
    };
  }
]);
