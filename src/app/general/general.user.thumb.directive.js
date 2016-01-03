(function () {
  'use strict';

  angular
    .module('soonis.general.directives')
    .directive('userThumb', userThumb);

  function userThumb($log, $rootScope, $timeout, $compile) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/general/_user.thumb.html',
      replace: true,
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

        _hovered = true;


        _hoverTimeout = $timeout(function() {

          if(!_hovered) {
            _hoverTimeout = null;
            return;
          }

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

        $rootScope.$broadcast("user-hover-popup.hide");

      }

    }

  }

})();
