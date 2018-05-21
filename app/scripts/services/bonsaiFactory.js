'use strict';
angular.module('BonsaiApp.factory', [])
.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
})
.service('menu-toggle', function($scope) {
  $scope.isOpen = true;
  $scope.menuToggle = function () {
      $scope.isOpen =!$scope.isOpen;
  }
});
