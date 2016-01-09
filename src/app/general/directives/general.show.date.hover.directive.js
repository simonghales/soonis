(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('showDateHover', showDateHover);

  function showDateHover($log, $rootScope, $timeout, $compile, DateHoverService) {

    var directive = {
      restrict: 'A',
      scope: false,
      link: link
    }

    return directive;

    function link(scope, element, attrs) {

      var eventName = "date-hover";
      var delay = 150;

      var _hoverTimeout = null;
      var _hovered = false;

      _activate();

      function _activate() {

        element.bind("mouseover", _addUserHover);
        element.bind("mouseleave", _hideUserHover);
        element.bind("click", _hideUserHover);
      }

      function _addUserHover() {

        //$log.debug("hover element: ", element, element.offset());

        _hovered = true;

        _hoverTimeout = $timeout(function() {

          if(!_hovered) {
            _hoverTimeout = null;
            return;
          }

          var triangleOffset = 5;
          var sideOffset = 3;
          var offset = element.offset();
          var height = element[0].offsetHeight;
          offset.top = offset.top + height + triangleOffset;
          offset.left = offset.left + sideOffset;

          DateHoverService.setPosition(offset.left, offset.top);

          //$log.debug("offset", offset, element[0].offsetHeight);

          if(angular.element(document.querySelector('#date-hover-popup'))[0]) {
            $rootScope.$broadcast(eventName + ".display");
          } else {
            angular.element(document.querySelectorAll('body')).append(
              $compile("<date-hover-display></date-hover-display>")(scope)
            );
          }

          //$log.debug("Showing it: timeout", _hoverTimeout);

          _hoverTimeout = null;
        }, delay);

      }

      function _cancelTimeout() {
        if(_hoverTimeout !== null) {
          $timeout.cancel(_hoverTimeout);
          _hoverTimeout = null;
          //$log.warn("Cancelled timeout");
        } else {
          //$log.debug("Nothing to cancel");
        }
      }

      function _hideUserHover() {

        _hovered = false;

        _cancelTimeout();

        $timeout(function() {
          $rootScope.$broadcast(eventName + ".hide");
        }, 100);

      }

    }

  }

})();
