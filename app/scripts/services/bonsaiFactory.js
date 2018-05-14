'use strict';
angular.module('BonsaiApp.factory', [])
.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
