'use strict';

/**
 * @ngdoc function
 * @name angularSimpleApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the angularSimpleApp
 */
angular.module('angularSimpleApp')
  .controller('UsersCtrl', function($scope, Users){
    $scope.users = Users.query();
  });
