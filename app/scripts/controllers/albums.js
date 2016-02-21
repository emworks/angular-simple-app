'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('AlbumsCtrl', function($scope, Albums){
    $scope.albums = Albums.query();
  });
