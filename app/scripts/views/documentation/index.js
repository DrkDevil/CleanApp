'use strict';
angular.module('BonsaiApp.docs', ['ngRoute','docs.controllers','docs.directives'])
.run(['$rootScope', '$route', '$location', function($rootScope, $route, $location) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) {
      document.title = $route.current.title;
    }
  });
}])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/docs', { title: 'BonsaiApp - Documentation', templateUrl: 'docs.html', controller: 'docsCtrl' })
    .when('/started', { title: 'BonsaiApp - Getting Started', templateUrl: 'started.html', controller: 'docsCtrl' })
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
}]);