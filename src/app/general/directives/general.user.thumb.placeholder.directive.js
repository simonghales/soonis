(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('userThumbPlaceholder', userThumbPlaceholder);

  function userThumbPlaceholder($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_user.thumb.placeholder.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
