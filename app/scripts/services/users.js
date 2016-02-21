'use strict';

/**
 * @ngdoc service
 * @name angularSimpleApp.Users
 * @description
 * # Users
 * Factory in the angularSimpleApp.
 */
angular.module('angularSimpleApp')
  .factory('Users', function ($resource, config) {
    return $resource(config.endpoint + '/users/:id');
  });
