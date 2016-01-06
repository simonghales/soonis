(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('userThumb', userThumb);

  function userThumb() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_user.thumb.html',
      replace: true,
      scope: false,
    }

    return directive;

  }

})();
