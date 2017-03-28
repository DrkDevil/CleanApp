angular.module('newView.controllers', [])
.controller('newViewCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.$on('$locationChangeStart', function(scope) {
    $scope.pathUrl = $location.path();($scope.pathUrl);
  });
  // Add Page Class for more control over page specific classes
  $("html").removeClass().addClass("newView");	

}])

.controller('soonCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.$on('$locationChangeStart', function(scope) {
    $scope.pathUrl = $location.path();($scope.pathUrl);
  });
  // Add Page Class for more control over page specific classes
  $("html").removeClass().addClass("soonView");	

}]);