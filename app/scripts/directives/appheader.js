'use strict';

/**
 * @ngdoc directive
 * @name angularSimpleApp.directive:appHeader
 * @description
 * # appHeader
 */
angular.module('angularSimpleApp')
  .directive('appHeader', function () {
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      controller: 'HeaderCtrl'
    };
  });
