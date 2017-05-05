'use strict';
angular.module('BonsaiApp.index', ['ngRoute','index.controllers','index.directives'])

// Configure the fakeBrowser. Do not set these values in actual projects.
.constant('initUrl', 'http://www.digitalreligion.net/app/path?a=b#h')
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
    .when('/', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'main.html', controller: 'IndexCtrl' })
    .when('/components', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'components.html', controller: 'ComponentCtrl' })
    .when('/philosophy', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'philosophy.html', controller: 'PhilosCtrl' })
    .when('/css', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'css.html', controller: 'CssCtrl' })
	.when('/structure', { title: 'BonsaiApp - BaseApp with Modern UI', templateUrl: 'structure.html', controller: 'StructCtrl' })
    .otherwise({ redirectTo: '/' });
}]);