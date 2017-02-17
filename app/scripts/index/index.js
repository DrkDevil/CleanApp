'use strict';
angular.module('BonsaiApp.index', [
  'ngRoute',
  'index.controllers',
  'index.directives'
])
.run(['$rootScope', '$route', '$location', function($rootScope, $route, $location) {
  $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
    if (oldVal !== newVal) {
      document.title = $route.current.title;

    }
  });
}])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', { 
      title: 'BonsaiApp - BaseApp with Modern UI', 
      templateUrl: 'main.html', 
      controller: 'IndexCtrl' 
    })
    .when('/about', { 
      title: 'BonsaiApp - About', 
      templateUrl: 'about.html', 
      controller: 'IndexCtrl' 
    })
	.when('/soon', { 
      title: 'Under Construction', 
      templateUrl: 'soon.html', 
      controller: 'IndexCtrl' 
    })
    .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
}]);