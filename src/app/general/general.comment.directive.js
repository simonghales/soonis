(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('comment', comment);

  function comment($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_comment.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
