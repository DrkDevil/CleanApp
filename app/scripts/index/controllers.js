angular.module('index.controllers', [])
.controller('IndexCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
  $scope.$on('$locationChangeStart', function(scope) {
    $scope.pathUrl = $location.path();($scope.pathUrl);
  });
}]);