'use strict';

angular.module('gifipesApp', [
  'gifipesApp.auth',
  'gifipesApp.admin',
  'gifipesApp.constants',
  'gifipesApp.reddit',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
