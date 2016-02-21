'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:RegisterFormCtrl
 * @description
 * # RegisterFormCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('RegisterFormCtrl', function ($scope, $uibModalInstance) {
    $scope.submit = function(){
      $uibModalInstance.close();
    };
  });
