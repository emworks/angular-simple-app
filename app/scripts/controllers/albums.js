'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('AlbumsCtrl', function($scope, Albums, Users){
    // get users info
    Users.query().$promise.then(function(response){
      // index users by user id
      $scope.users = _.keyBy(response, 'id');
      // get all albums
      $scope.albums = Albums.query();
    });
  });
