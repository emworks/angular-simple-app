'use strict';

/**
 * @ngdoc service
 * @name angularSimpleApp.Photos
 * @description
 * # Photos
 * Factory in the angularSimpleApp.
 */
angular.module('angularSimpleApp')
  .factory('Photos', function($resource, config) {
    return $resource(config.endpoint + '/photos/:id', {
      albumId: '@id'
    });
  });
