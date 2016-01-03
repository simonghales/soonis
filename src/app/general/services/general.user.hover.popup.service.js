(function () {
  'use strict';

  angular
    .module('soonis.general.services')
    .factory('UserPopupService', UserPopupService);

  /** @ngInject */
  function UserPopupService($log) {

    var _position = {
      x: 0,
      y: 0
    };

    var service = {
      getPosition: getPosition,
      setPosition: setPosition
    };

    return service;

    function getPosition() {
      return _position;
    }

    function setPosition(x, y) {
      _position.x = x;
      _position.y = y;
    }

  }

})();
