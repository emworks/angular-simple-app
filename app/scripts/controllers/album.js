'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('AlbumCtrl', function($scope, Photos, $routeParams, Lightbox){
    $scope.photos = Photos.query({albumId: $routeParams.id});
    $scope.openLightboxModal = function(index){
      Lightbox.openModal($scope.photos, index);
    };
  });
