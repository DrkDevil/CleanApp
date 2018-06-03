angular.module('docs.directives', [])
// Leftbar Toggle Directive is specifically for pages with a single left sidebar
.directive('leftbarToggle', function() {
  return {
    link: function(scope, element, attrs) {
      element.parent().bind('click', function() {
        var lftPgWrpr = angular.element( document.querySelector('#pageWrapper'));
        lftPgWrpr.toggleClass('toggled');
        console.log('clicked');
      });
    }
  };
});
