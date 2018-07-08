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
  })
  // Accordions Directive
 .directive('accordion', function () {
   return {
     restrict: 'E',
     transclude: true,
     scope: {},
     template: '<div ng-transclude></div>',
     link: function (scope, element) {
       // Set All Panels to open
       element.children().find('.panel').css('display', 'block');
       // Get Button
       element.find('i').on('click', function () {
         // When Clicked
         var panel = element.children().find('.panel');
         var icon = element.children().find('i');
         var button = element.children().find('button');
         var ah = element.find('.accordion-highlight');
         if (angular.element(panel).hasClass('open') && (angular.element(icon).hasClass('fa-chevron-circle-up'))) {
           panel.css('display', 'none');
           panel.removeClass('open');
           button.removeClass('open');
           ah.addClass('closed');
           icon.removeClass('fa-chevron-circle-up');
           icon.addClass('fa-chevron-circle-down');
           console.log(ah);
         }
         else {
           panel.css('display', 'block');
           panel.addClass('open');
           button.addClass('open');
           ah.removeClass('closed');
           icon.removeClass('fa-chevron-circle-down');
           icon.addClass('fa-chevron-circle-up');
         }
       });
     }
   };
 });
