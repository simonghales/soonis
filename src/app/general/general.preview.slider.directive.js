(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('previewSlider', previewSlider);

  function previewSlider($log) {

    var directive = {
      restrict: 'A',
      scope: false,
      link: link
    }

    return directive;

    function link(scope, element, attrs) {

      $log.debug("Preview slider initiated");

      attrs.$observe('currentSlide', function () {
        _changeSlide();
      });

      function _changeSlide() {
        var offset = attrs.currentSlide * 100;

        element.css({
          '-webkit-transform' : 'translate3d(-' + offset + '%, 0, 0)',
          '-o-transform' : 'translate3d(-' + offset + '%, 0, 0)',
          '-ms-transform' : 'translate3d(-' + offset + '%, 0, 0)',
          'transform' : 'translate3d(-' + offset + '%, 0, 0)'
        });

      }

    }

  }

})();
