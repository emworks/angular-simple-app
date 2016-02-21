'use strict';

/**
 * @ngdoc overview
 * @name angularSimpleApp
 * @description
 * # angularSimpleApp
 *
 * Main module of the application.
 */
angular
  .module('angularSimpleApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
