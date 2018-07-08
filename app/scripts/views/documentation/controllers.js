angular.module('docs.controllers', [])
  .controller('docsCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.$on('$locationChangeStart', function(scope) {
      $scope.pathUrl = $location.path();
      ($scope.pathUrl);
    });
    // Add Page Class for more control over page specific classes
    $('html').removeClass().addClass('docs');
  }]);
