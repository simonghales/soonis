(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('showUserHover', showUserHover);

  function showUserHover($log, $rootScope, $timeout, $compile, UserPopupService) {

    var directive = {
      restrict: 'A',
      scope: {
        userData: '='
      },
      link: link
    }

    return directive;

    function link(scope, element, attrs) {

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

          UserPopupService.setPosition(offset.left, offset.top);
          var user = scope.userData;
          if(user.plain) {
            user = user.plain();
          }
          UserPopupService.setUser(user);

          $log.debug("user", scope.userData);

          if(angular.element(document.querySelector('#user-hover-popup'))[0]) {
            $rootScope.$broadcast("user-hover-popup.display");
          } else {
            angular.element(document.querySelectorAll('body')).append(
              $compile("<user-hover-popup></user-hover-popup>")(scope)
            );
          }

          //$log.debug("Showing it: timeout", _hoverTimeout);

          _hoverTimeout = null;
        }, 300);

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
          $rootScope.$broadcast("user-hover-popup.hide");
        }, 100);

      }

    }

  }

})();
