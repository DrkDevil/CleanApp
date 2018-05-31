'use strict';
angular.module('BonsaiApp.factory', [])
.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
})



.service('navToggle', function() {
    this.navToggle = $(function() {
      $("#left-toggle").click(function(e) {
        e.preventDefault();
      $("#pageWrapper").toggleClass("left-toggled");
      });
     });
});
