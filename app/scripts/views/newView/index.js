'use strict';
angular.module('BonsaiApp.newView', ['ngRoute','newView.controllers','newView.directives'])
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
    .when('/docs', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'docs.html', controller: 'newViewCtrl' })
    .when('/soon', { title: 'BonsaiApp - About BonsaiApp', templateUrl: 'soon.html', controller: 'soonCtrl' })
    .otherwise({ redirectTo: '/' });
  $locationProvider.html5Mode(true);
}]);