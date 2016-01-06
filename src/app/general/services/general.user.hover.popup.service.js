(function () {
  'use strict';

  angular
    .module('soonis.general.services')
    .factory('UserPopupService', UserPopupService);

  /** @ngInject */
  function UserPopupService($log) {

    var _position = {
      x: 0,
      y: 0,
      alignLeft: true
    };

    var service = {
      getPosition: getPosition,
      setPosition: setPosition
    };

    return service;

    function getPosition() {
      return _position;
    }

    function setPosition(x, y, alignRight) {
      _position.x = x;
      _position.y = y;
      if(alignRight) _position.alignLeft = false;
      else _position.alignLeft = true;
    }

  }

})();
