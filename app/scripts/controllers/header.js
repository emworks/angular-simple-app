'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('HeaderCtrl', function ($scope, $uibModal, $location) {
    $scope.isCollapsed = true;
    $scope.isActive = function(path){
      return $location.path().substr(0, path.length) === path;
    };
    $scope.open = function(size){
      $uibModal.open({
        animation: true,
        templateUrl: 'views/register.html',
        controller: 'RegisterFormCtrl',
        size: size
      });
    };
  });
