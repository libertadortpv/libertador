
angular.module('libertadorApp')

// mode: { 'mock' || 'dev' }
.value('mode', 'mock')

.service('Urls', ['mode', function(mode) {
  'use strict';

    var urls = {
      mock: {
        login: 'scripts/mocks/user.json'
      },
      dev: {
        login: 'api/login'
      }

    };

    return urls[mode];
  }
]);
