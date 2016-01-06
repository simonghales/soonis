(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('userHoverPopup', userHoverPopup);

  function userHoverPopup($log, $rootScope, $timeout, $window, UserPopupService) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_user.hover.popup.html',
      replace: true,
      //scope: false,
      link: link
    }

    return directive;

    function link(scope, element, attrs) {

      var hovered = false;

      _activate();

      function _activate() {

        $rootScope.$on("user-hover-popup.display", function() {
          _display();
        });

        $rootScope.$on("user-hover-popup.hide", function() {
          _hide();
        });

        element.bind("mouseover", _mouseOver);
        element.bind("mouseleave", _mouseLeave);

        _display();

      }

      function _display() {

        scope.visible = true;

        var offset = UserPopupService.getPosition();
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

      function _hide() {
        if(hovered) return;
        $timeout(function() {
          $log.debug("hiding");
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
