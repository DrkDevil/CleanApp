'use strict';
angular.module('BonsaiApp.index', ['ngRoute','index.controllers','index.directives'])
// Change the page titles
.run(['$rootScope', '$route', '$location', function($rootScope, $route, $location) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) { document.title = $route.current.title; }
  });
}])
// Set Routes
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'main.html', controller: 'IndexCtrl' })
    .when('/about', { title: 'BonsaiApp - About BonsaiApp', templateUrl: 'about.html', controller: 'IndexCtrl' })
  	.when('/soon', { title: 'BonsaiApp - Coming Soon', templateUrl: 'soon.html', controller: 'IndexCtrl' })
    .otherwise({ redirectTo: '/' });
}]);