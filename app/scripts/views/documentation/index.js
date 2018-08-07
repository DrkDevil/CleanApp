'use strict';
angular.module('BonsaiApp.docs', ['ngRoute', 'docs.controllers', 'docs.directives'])
  .run(['$rootScope', '$route', '$location', function($rootScope, $route, $location) {
    $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
      if (oldVal !== newVal) {
        document.title = $route.current.title;
      }
    });
  }])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/alerts', {
        title: 'BonsaiApp - Alerts and Notifications',
        templateUrl: 'documentation/components/alerts.html',
        controller: 'docsCtrl'
      })
      .when('/badges', {
        title: 'BonsaiApp - Badges',
        templateUrl: 'documentation/components/badges.html',
        controller: 'docsCtrl'
      })
      .when('/breadcrumbs', {
        title: 'BonsaiApp - Breadcrumbs',
        templateUrl: 'documentation/components/breadcrumbs.html',
        controller: 'docsCtrl'
      })
      .when('/buttons', {
        title: 'BonsaiApp - Buttons',
        templateUrl: 'documentation/components/buttons.html',
        controller: 'docsCtrl'
      })
      .when('/cards', {
        title: 'BonsaiApp - Card',
        templateUrl: 'documentation/components/cards.html',
        controller: 'docsCtrl'
      })
      .when('/collapse', {
        title: 'BonsaiApp - collapse',
        templateUrl: 'documentation/components/collapse.html',
        controller: 'docsCtrl'
      })
      .when('/dropdowns', {
        title: 'BonsaiApp - Dropdowns',
        templateUrl: 'documentation/components/dropdowns.html',
        controller: 'docsCtrl'
      })
      .when('/forms', {
        title: 'BonsaiApp - Forms',
        templateUrl: 'documentation/components/forms.html',
        controller: 'docsCtrl'
      })
      .when('/docs', {
        title: 'BonsaiApp - Documentation',
        templateUrl: 'documentation/overview/docs.html',
        controller: 'docsCtrl'
      })
      .when('/dropdowns', {
        title: 'BonsaiApp - Drop Downs',
        templateUrl: 'documentation/components/dropdowns.html',
        controller: 'docsCtrl'
      })
      .when('/inputs', {
        title: 'BonsaiApp - Inputs &amp Input Groups',
        templateUrl: 'documentation/components/inputs.html',
        controller: 'docsCtrl'
      })
      .when('/list-groups', {
        title: 'BonsaiApp - List Groups',
        templateUrl: 'documentation/components/list-groups.html',
        controller: 'docsCtrl'
      })
      .when('/modals', {
        title: 'BonsaiApp - Modals',
        templateUrl: 'documentation/components/modals.html',
        controller: 'docsCtrl'
      })
      .when('/navbars', {
        title: 'BonsaiApp - Navbars',
        templateUrl: 'documentation/components/navbars.html',
        controller: 'docsCtrl'
      })
      .when('/paganation', {
        title: 'BonsaiApp - Paganation',
        templateUrl: 'documentation/components/paganation.html',
        controller: 'docsCtrl'
      })
      .when('/page-banners', {
        title: 'BonsaiApp - Pae Banners',
        templateUrl: 'documentation/components/page-banners.html',
        controller: 'docsCtrl'
      })
      .when('/pillbars', {
        title: 'BonsaiApp - Pill Bars',
        templateUrl: 'documentation/components/pillbars.html',
        controller: 'docsCtrl'
      })
      .when('/progress-bars', {
        title: 'BonsaiApp - Progress Bars',
        templateUrl: 'documentation/components/progress-bars.html',
        controller: 'docsCtrl'
      })
      .when('/sidebars', {
        title: 'BonsaiApp - Sidebars',
        templateUrl: 'documentation/components/sidebars.html',
        controller: 'docsCtrl'
      })
      .when('/sass-grid', {
        title: 'BonsaiApp - Sass Grid System',
        templateUrl: 'documentation/app/sass-grid.html',
        controller: 'docsCtrl'
      })

      .when('/started', {
        title: 'BonsaiApp - Gettings Started',
        templateUrl: 'documentation/overview/started.html',
        controller: 'docsCtrl'
      })

      .when('/requirements', {
        title: 'BonsaiApp - BonsaiUI',
        templateUrl: 'documentation/overview/requirements.html',
        controller: 'docsCtrl'
      })
      .when('/started', {
        title: 'BonsaiApp - Getting Started',
        templateUrl: 'documentation/overview/started.html',
        controller: 'docsCtrl'
      })
      .when('/Typography', {
        title: 'BonsaiApp - Typography',
        templateUrl: 'documentation/app/typo.html',
        controller: 'docsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
