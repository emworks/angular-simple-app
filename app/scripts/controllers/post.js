'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('PostCtrl', function($scope, Posts, Users, $routeParams){
    $scope.post = Posts.get({id: $routeParams.id}, function(response){
      // get user info
      $scope.user = Users.get({id: response.userId});
    });
  });
