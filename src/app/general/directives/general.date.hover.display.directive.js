(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('dateHoverDisplay', dateHoverDisplay);

  function dateHoverDisplay($log, $rootScope, $timeout, $window, DateHoverService) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_date.hover.html',
      replace: true,
      scope: {},
      link: link
    }

    return directive;

    function link(scope, element, attrs) {

      var eventName = "date-hover";

      var hovered = false;
      var recentlyChangedState = false;

      _activate();

      function _activate() {

        $rootScope.$on(eventName + ".display", function() {
          if(recentlyChangedState) return;
          _display();
        });

        $rootScope.$on('$stateChangeStart', function() {
          _hide(true);
          recentlyChangedState = true;

          $timeout(function() {
            recentlyChangedState = false;
          }, 1000);

        });

        $rootScope.$on(eventName + ".hide", function() {
          _hide();
        });

        element.bind("mouseover", _mouseOver);
        element.bind("mouseleave", _mouseLeave);

      }

      function _display() {

        scope.visible = true;

        var offset = DateHoverService.getPosition();
        var windowWidth = $window.innerWidth;
        var difference = (windowWidth - 20) - offset.x;

        if (difference < element.width()) {
          offset.x = offset.x - element.width() - 10;
          scope.alignRight = true;
        } else {
          scope.alignRight = false;
        }

        element.css({
          top: offset.y + 'px',
          left: offset.x + 'px',
          right: 'auto'
        });

      }

      function _hide(force) {
        if(hovered && !force) return;
        $timeout(function() {
          scope.visible = false;
        });
      }

      function _mouseOver() {
        hovered = true;
      }

      function _mouseLeave() {
        hovered = false;
        $timeout(function() {
          _hide();
        }, 200);
      }

    }

  }

})();
