(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('userHoverPopup', userHoverPopup);

  function userHoverPopup($log, $rootScope, $timeout, UserPopupService) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_user.hover.popup.html',
      replace: true,
      //scope: false,
      link: link
    }

    return directive;

    function link(scope, element, attrs) {

      _activate();

      function _activate() {

        $rootScope.$on("user-hover-popup.display", function() {
          _display();
        });

        $rootScope.$on("user-hover-popup.hide", function() {
          _hide();
        });

        _display();
      }

      function _display() {
        $log.debug("Displaying: positions: ", UserPopupService.getPosition());
        scope.visible = true;
      }

      function _hide() {
        $timeout(function() {
          $log.debug("hiding");
          scope.visible = false;
        });
      }

    }

  }

})();
