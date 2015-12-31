(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('siteSlider', siteSlider);

  function siteSlider($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_preview.slider.html',
      replace: true,
    }

    return directive;

  }

})();
