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
    // collapse main menu
    $scope.isCollapsed = true;
    // check if menu item is active
    $scope.isActive = function(path){
      return $location.path().substr(0, path.length) === path;
    };
    $scope.openRegisterForm = function(size){
      $uibModal.open({
        animation: true,
        templateUrl: 'views/register.html',
        controller: 'RegisterFormCtrl',
        size: size
      });
    };
  });
