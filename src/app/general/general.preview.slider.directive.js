(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('previewSlider', previewSlider);

  function previewSlider($log, $interval) {

    var directive = {
      restrict: 'A',
      scope: {
        currentSlide: '=',
        userAction: '='
      },
      link: link
    }

    return directive;

    function link(scope, element, attrs) {

      var duration = 10000;
      var maxSlides = 4;
      var intervalPromise;

      $log.debug("Preview slider initiated");

      _activate();

      function _activate() {
        scope.$watch('currentSlide', function () {
          _changeSlide();
        });
        _initInterval();
      }

      function _initInterval() {
        intervalPromise = $interval(_incrementSlide, duration);
      }

      function _incrementSlide() {
         if (scope.currentSlide + 1 !== maxSlides) {
           scope.currentSlide = scope.currentSlide + 1;
         } else {
           scope.currentSlide = 0;
         }
      }

      function _changeSlide() {
        var offset = scope.currentSlide * 100;

        element.css({
          '-webkit-transform' : 'translate3d(-' + offset + '%, 0, 0)',
          '-o-transform' : 'translate3d(-' + offset + '%, 0, 0)',
          '-ms-transform' : 'translate3d(-' + offset + '%, 0, 0)',
          'transform' : 'translate3d(-' + offset + '%, 0, 0)'
        });

        if(scope.userAction) {
          $interval.cancel(intervalPromise);
        }

      }

    }

  }

})();
