angular.module('docs.directives', [])
.directive('docs', function() {
  return function(scope, element, attrs) {
 };
})
.directive('w3TestDirective', function($scope) {
  $scope.toggleNav = function() {
    document.getElementById('sidebarSubmenu').classList.toggle('show');
    //console.log('clicked');
    document.getElementById('sidebarCollapse').classList.add('active');
  }
});
