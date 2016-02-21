'use strict';

/**
 * @ngdoc service
 * @name angularSimpleApp.Posts
 * @description
 * # Posts
 * Factory in the angularSimpleApp.
 */
angular.module('angularSimpleApp')
  .factory('Posts', function ($resource, config) {
    return $resource(config.endpoint + '/posts/:id', {
      userId: '@id'
    });
  });
