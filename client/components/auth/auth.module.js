'use strict';

angular.module('gifipesApp.auth', [
  'gifipesApp.constants',
  'gifipesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
