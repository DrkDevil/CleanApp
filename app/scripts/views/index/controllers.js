angular.module('index.controllers', [])
.controller('IndexCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.$on('$locationChangeStart', function(scope) {
      $scope.pathUrl = $location.path();($scope.pathUrl);
    })

    $('html').removeClass().addClass('main');
  }

]);
