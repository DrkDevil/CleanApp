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
          var rftPgWrpr = angular.element(document.querySelector('#pageWrapper'));
          var rftPgWrprDsb = angular.element(document.querySelector('#pageWrapper-dsb'));
          rftPgWrpr.toggleClass('r-toggled');
          rftPgWrprDsb.toggleClass('r-toggled');
          console.log('clicked');
        });
      }
    };
  })
  // Accordions Directive
  .directive('accordion', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      template: '<div ng-transclude></div>',
      link: function(scope, element) {
        // Set All Panels to open
        element.children().find('.panel').css('display', 'block');
        // Get Button
        element.find('i').on('click', function() {
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
          } else {
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
  })

  // Collapse
  .directive('collapse', function() {
    return {
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          // Get target name from HTML Attribute
          var clpsTarget = this.getAttribute('clps-target');
          // Set as Target Value
          var targetValue = (clpsTarget);
          // Get element by ID that equals targets the name
          var contentID = angular.element(document.querySelector(targetValue));
          // Get element by ID that equals targets the name
          var contentClass = angular.element(document.getElementsByClassName(targetValue));

          if (targetValue === clpsTarget) {
            contentID.toggleClass('open');
            contentClass.toggleClass('open');
          } else {
            //Do Nothing
          }
          console.log(ccbody);

        });
      }
    };
  })
  // Universal Close Directive
  .directive('close', function() {
    return {
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          for (i = 0; i < element.length; i++) {
            console.log(element);
            element.parent().fadeOut();
          }
        });
      }
    };
  });
