(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('siteFooter', siteFooter);

  function siteFooter($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_footer.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
