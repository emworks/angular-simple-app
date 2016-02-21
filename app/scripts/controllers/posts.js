'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('PostsCtrl', function ($scope, Posts, Users) {
    Users.query().$promise.then(function(response){
      $scope.users = _.keyBy(response, 'id');
      $scope.posts = Posts.query();
    });
  });
