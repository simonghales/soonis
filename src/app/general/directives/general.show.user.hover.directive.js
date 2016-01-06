(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('showUserHover', showUserHover);

  function showUserHover($log, $rootScope, $timeout, $compile, UserPopupService) {

    var directive = {
      restrict: 'A',
      scope: false,
      link: link
    }

    return directive;

    function link(scope, element, attrs) {

      var _hoverTimeout = null;
      var _hovered = false;

      element.bind("mouseover", _addUserHover);
      element.bind("mouseleave", _hideUserHover);

      function _addUserHover() {

        $log.debug("hover element: ", element, element.offset());

        _hovered = true;

        _hoverTimeout = $timeout(function() {

          if(!_hovered) {
            _hoverTimeout = null;
            return;
          }

          var triangleOffset = 5;
          var sideOffset = 3;
          var offset = element.offset();
          offset.top = offset.top + element.height() + triangleOffset;
          offset.left = offset.left + sideOffset;

          UserPopupService.setPosition(offset.left, offset.top);

          $log.debug("offset", offset);

          if(angular.element(document.querySelector('#user-hover-popup'))[0]) {
            $rootScope.$broadcast("user-hover-popup.display");
          } else {
            angular.element(document.querySelectorAll('body')).append(
              $compile("<user-hover-popup></user-hover-popup>")(scope)
            );
          }

          $log.debug("Showing it: timeout", _hoverTimeout);

          _hoverTimeout = null;
        }, 300);

      }

      function _hideUserHover() {

        _hovered = false;

        if(_hoverTimeout !== null) {
          $timeout.cancel(_hoverTimeout);
          _hoverTimeout = null;
          $log.warn("Cancelled timeout");
        } else {
          $log.debug("Nothing to cancel");
        }

        $timeout(function() {
          $rootScope.$broadcast("user-hover-popup.hide");
        }, 100);

      }

    }

  }

})();
