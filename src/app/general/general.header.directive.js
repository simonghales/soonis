(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('siteHeader', siteHeader);

  function siteHeader($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_header.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
