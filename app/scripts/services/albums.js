'use strict';

/**
 * @ngdoc service
 * @name angularSimpleApp.Albums
 * @description
 * # Albums
 * Factory in the angularSimpleApp.
 */
angular.module('angularSimpleApp')
  .factory('Albums', function($resource, config) {
    return $resource(config.endpoint + '/albums/:id', {
      userId: '@id'
    });
  });
