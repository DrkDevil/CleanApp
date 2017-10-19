'use strict';
angular.module('BonsaiApp.index', ['ngRoute','index.controllers','index.directives'])

// Configure the fakeBrowser. Do not set these values in actual projects.
.constant('initUrl', '/')
.constant('baseHref', '/base/index.html')
.value('$sniffer', { history: true })


// Page RoutingChange the page titles
.run(['$rootScope', '$route', '$location', function($rootScope, $route, $location) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) { document.title = $route.current.title; }
  });
}])

// Set Routes
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { title: 'BonsaiApp - Angular BaseApp with Modern UI', templateUrl: 'main.html', controller: 'IndexCtrl' })
    .otherwise({ redirectTo: '/' });
}]);