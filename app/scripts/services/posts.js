'use strict';

/**
 * @ngdoc service
 * @name angularSimpleApp.Posts
 * @description
 * # Posts
 * Factory in the angularSimpleApp.
 */
angular.module('angularSimpleApp')
  .factory('Posts', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
