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
        templateUrl: 'documentation/alerts.html',
        controller: 'docsCtrl'
      })
      .when('/badges', {
        title: 'BonsaiApp - Badges',
        templateUrl: 'documentation/badges.html',
        controller: 'docsCtrl'
      })
      .when('/breadcrumbs', {
        title: 'BonsaiApp - Breadcrumbs',
        templateUrl: 'documentation/breadcrumbs.html',
        controller: 'docsCtrl'
      })
      .when('/buttons', {
        title: 'BonsaiApp - Buttons',
        templateUrl: 'documentation/buttons.html',
        controller: 'docsCtrl'
      })
      .when('/cards', {
        title: 'BonsaiApp - Card',
        templateUrl: 'documentation/cards.html',
        controller: 'docsCtrl'
      })
      .when('/carousel', {
        title: 'BonsaiApp - carousel',
        templateUrl: 'documentation/carousel.html',
        controller: 'docsCtrl'
      })
      .when('/collapse', {
        title: 'BonsaiApp - collapse',
        templateUrl: 'documentation/collapse.html',
        controller: 'docsCtrl'
      })
      .when('/designers', {
        title: 'BonsaiApp - Designers',
        templateUrl: 'documentation/designers.html',
        controller: 'docsCtrl'
      })
      .when('/developers', {
        title: 'BonsaiApp - Developers',
        templateUrl: 'documentation/developers.html',
        controller: 'docsCtrl'
      })
      .when('/dropdowns', {
        title: 'BonsaiApp - Dropdowns',
        templateUrl: 'documentation/dropdowns.html',
        controller: 'docsCtrl'
      })
      .when('/forms', {
        title: 'BonsaiApp - Forms',
        templateUrl: 'documentation/forms.html',
        controller: 'docsCtrl'
      })
      .when('/docs', {
        title: 'BonsaiApp - Documentation',
        templateUrl: 'documentation/docs.html',
        controller: 'docsCtrl'
      })
      .when('/dropdowns', {
        title: 'BonsaiApp - Drop Downs',
        templateUrl: 'documentation/dropdowns.html',
        controller: 'docsCtrl'
      })
      .when('/forms', {
        title: 'BonsaiApp - Forms',
        templateUrl: 'documentation/forms.html',
        controller: 'docsCtrl'
      })
      .when('/inputs', {
        title: 'BonsaiApp - Inputs &amp Input Groups',
        templateUrl: 'documentation/inputs.html',
        controller: 'docsCtrl'
      })
      .when('/list-groups', {
        title: 'BonsaiApp - List Groups',
        templateUrl: 'documentation/list-groups.html',
        controller: 'docsCtrl'
      })
      .when('/modals', {
        title: 'BonsaiApp - Modals',
        templateUrl: 'documentation/modals.html',
        controller: 'docsCtrl'
      })
      .when('/navbars', {
        title: 'BonsaiApp - Navbars',
        templateUrl: 'documentation/navbars.html',
        controller: 'docsCtrl'
      })
      .when('/paganation', {
        title: 'BonsaiApp - Paganation',
        templateUrl: 'documentation/paganation.html',
        controller: 'docsCtrl'
      })
      .when('/page-banners', {
        title: 'BonsaiApp - Pae Banners',
        templateUrl: 'documentation/page-banners.html',
        controller: 'docsCtrl'
      })
      .when('/pillbars', {
        title: 'BonsaiApp - Pill Bars',
        templateUrl: 'documentation/pillbars.html',
        controller: 'docsCtrl'
      })
      .when('/popovers', {
        title: 'BonsaiApp - Popovers',
        templateUrl: 'documentation/popovers.html',
        controller: 'docsCtrl'
      })
      .when('/progress-bars', {
        title: 'BonsaiApp - Progress Bars',
        templateUrl: 'documentation/progress-bars.html',
        controller: 'docsCtrl'
      })
      .when('/sidebars', {
        title: 'BonsaiApp - Sidebars',
        templateUrl: 'documentation/sidebars.html',
        controller: 'docsCtrl'
      })
      .when('/sass-grid', {
        title: 'BonsaiApp - Sass Grid System',
        templateUrl: 'documentation/sass-grid.html',
        controller: 'docsCtrl'
      })
      .when('/flex-grid', {
        title: 'BonsaiApp - Flex Grid System',
        templateUrl: 'documentation/flex-grid.html',
        controller: 'docsCtrl'
      })
      .when('/css-grid', {
        title: 'BonsaiApp - CSS Grid System',
        templateUrl: 'documentation/css-grid.html',
        controller: 'docsCtrl'
      })
      .when('/started', {
        title: 'BonsaiApp - Gettings Started',
        templateUrl: 'documentation/started.html',
        controller: 'docsCtrl'
      })
      .when('/tooltips', {
        title: 'BonsaiApp - Tool Tips',
        templateUrl: 'documentation/tooltips.html',
        controller: 'docsCtrl'
      })
      .when('/ui', {
        title: 'BonsaiApp - BonsaiUI',
        templateUrl: 'documentation/ui.html',
        controller: 'docsCtrl'
      })
      .when('/started', {
        title: 'BonsaiApp - Getting Started',
        templateUrl: 'documentation/started.html',
        controller: 'docsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
