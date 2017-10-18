'use strict';
angular.module('BonsaiApp.docs', ['ngRoute','docs.controllers','index.directives'])
.run(['$rootScope', '$route', '$location', function($rootScope, $route, $location) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) {
      document.title = $route.current.title;
    }
  });
}])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/docs', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'docs.html', controller: 'docsCtrl' })
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
}]);