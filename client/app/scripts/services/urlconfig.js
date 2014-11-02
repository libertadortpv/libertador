
angular.module('libertadorApp')

// mode: { 'mock' || 'dev' }
.value('mode', 'mock')

.factory('Urls', ['mode', function(mode) {
  'use strict';

    var urls = {
      mock: {
        login: 'scripts/mocks/user.json',
        logout: 'scripts/mocks/user.json',
        order: 'scripts/mocks/user.json',
        products: 'scripts/mocks/products.json',
        clients: 'scripts/mocks/clients.json'
      },
      dev: {
        login: 'api/login',
        logout: 'api/logout',
        order: 'api/order',
        products: 'api/products',
        clients: 'api/clients'
      }

    };

    return urls[mode];
  }
]);
