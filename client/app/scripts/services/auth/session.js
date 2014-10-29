
angular.module('libertadorApp')

.service('Session', function() {
  'use strict';

  this.create = function(sessionId, user) {
    this.id = sessionId;
    this.firstName = user.name;
    this.lastName = user.name;
    this.email = user.email;
    this.role = user.role;
  };

  this.destroy = function() {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.role = null;
  };

  return this;
});
