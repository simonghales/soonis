(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('notification', notification);

  function notification($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_notification.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
