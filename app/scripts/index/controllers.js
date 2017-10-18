angular.module('index.controllers', [])
.controller('IndexCtrl', ['$scope', '$location', 
  function($scope, $location,) {
    $scope.$on('$locationChangeStart', function(scope) {
      $scope.pathUrl = $location.path();($scope.pathUrl);
    });
    $("html").removeClass().addClass("main");	
}])

.controller('PhilosCtrl', ['$scope', '$location',
  function($scope, $location) {
  $scope.$on('$locationChangeStart', function(scope) {
    $scope.pathUrl = $location.path();($scope.pathUrl);
  });
  // Add Page Class for more control over page specific classes
  $("html").removeClass().addClass("philos");	
}])

.controller('StructCtrl', ['$scope', '$location', 
  function($scope, $location) {
    $scope.$on('$locationChangeStart', function(scope) {
      $scope.pathUrl = $location.path();($scope.pathUrl);
    });
    // Add Page Class for more control over page specific classes
    $("html").removeClass().addClass("structure");	
}])

.controller('CssCtrl', ['$scope', '$location', 
function($scope, $location) {
  $scope.$on('$locationChangeStart', function(scope) {
    $scope.pathUrl = $location.path();($scope.pathUrl);
  });
  // Add Page Class for more control over page specific classes
  $("html").removeClass().addClass("css");	
}]);