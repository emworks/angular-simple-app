'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('UserCtrl', function($scope, Users, Albums, Posts, $routeParams, $uibModal){
    $scope.user = Users.get({id: $routeParams.id}, function(){
      // prepare object for google map
      $scope.map = {
        center: {
          latitude: $scope.user.address.geo.lat,
          longitude: $scope.user.address.geo.lng
        },
        zoom: 4
      };
    });
    $scope.showMap = function(){
      $uibModal.open({
        animation: true,
        templateUrl: 'views/map.html',
        size: 'lg',
        scope: $scope
      });
    };
    $scope.albums = Albums.query({userId: $routeParams.id});
    $scope.posts = Posts.query({userId: $routeParams.id});
  });
