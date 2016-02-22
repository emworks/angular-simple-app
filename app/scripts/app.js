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
    'ngRoute',
    'ui.bootstrap',
    'bootstrapLightbox',
    'uiGmapgoogle-maps'
  ])
  .constant('config', {
    // Fake Online REST API
    endpoint: 'http://jsonplaceholder.typicode.com'
  })
  .config(function ($routeProvider) {
    $routeProvider
    .when('/posts', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
    .when('/posts/:id', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    })
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UsersCtrl'
    })
    .when('/users/:id', {
      templateUrl: 'views/user.html',
      controller: 'UserCtrl'
    })
    .when('/albums', {
      templateUrl: 'views/albums.html',
      controller: 'AlbumsCtrl'
    })
    .when('/albums/:id', {
      templateUrl: 'views/album.html',
      controller: 'AlbumCtrl'
    })
    .otherwise({ redirectTo: '/posts' });
  });
