angular.module('docs.directives', [])
// Leftbar Toggle Directive is specifically for pages with a single left sidebar
.directive('leftbarToggle', function() {
  return {
    link: function(scope, element, attrs) {
      element.parent().bind('click', function() {
        var lftPgWrpr = angular.element( document.querySelector('#pageWrapper'));
        var lftPgWrprDsb = angular.element( document.querySelector('#pageWrapper-dsb'));
        lftPgWrpr.toggleClass('toggled');
        lftPgWrprDsb.toggleClass('toggled');
        console.log('clicked');
      });
    }
  };
})

.directive('scrollTo', function ($location, $anchorScroll) {
  return function(scope, element, attrs) {
    element.bind('click', function(event) {
      $anchorScroll.yOffset = 90;
        event.stopPropagation();
        var off = scope.$on('$locationChangeStart', function(ev) {
            off();
            ev.preventDefault();
        });
        var location = attrs.scrollTo;
        $location.hash(location);
        $anchorScroll();

    });

  };
});
