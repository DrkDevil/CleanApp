'use strict';
angular.module('BonsaiApp.newView', ['ngRoute','newView.controllers','index.directives'])
.run(['$rootScope', '$route', '$location', function($rootScope, $route, $location) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) {
      document.title = $route.current.title;
    }
  });
}])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/newView', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'newView.html', controller: 'newViewCtrl' })
    .when('/about', { title: 'BonsaiApp - About BonsaiApp', templateUrl: 'about.html', controller: 'newViewCtrl' })
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
}]);