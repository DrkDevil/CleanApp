angular.module('docs.directives', [])
  // Leftbar Toggle Directive is specifically for pages with a single left sidebar
  .directive('leftbarToggle', function() {
    return {
      link: function(scope, element, attrs) {
        element.parent().bind('click', function() {
          var lftPgWrpr = angular.element(document.querySelector('#pageWrapper'));
          var lftPgWrprDsb = angular.element(document.querySelector('#pageWrapper-dsb'));
          lftPgWrpr.toggleClass('toggled');
          lftPgWrprDsb.toggleClass('toggled');
          console.log('clicked');
        });
      }
    };
  })
  .directive('rightbarToggle', function() {
    return {
      link: function(scope, element, attrs) {
        element.parent().bind('click', function() {
          var lftPgWrpr = angular.element(document.querySelector('#pageWrapper'));
          var lftPgWrprDsb = angular.element(document.querySelector('#pageWrapper-dsb'));
          lftPgWrpr.toggleClass('r-toggled');
          lftPgWrprDsb.toggleClass('r-toggled');
          console.log('clicked');
        });
      }
    };
  });
