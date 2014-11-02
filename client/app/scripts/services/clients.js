
angular.module('libertadorApp')

.factory('Clients', ['Urls', '$resource', function(Urls, $resource) {
    'use strict';

    var Clients = $resource(Urls.clients, {});

    return {
      get: function() {
        return Clients.query().$promise;
      }
    };
  }
]);
