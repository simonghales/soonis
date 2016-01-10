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
    var _user = null;

    var service = {
      getPosition: getPosition,
      getUser: getUser,
      setPosition: setPosition,
      setUser: setUser
    };

    return service;

    function getPosition() {
      return _position;
    }

    function getUser() {
      return _user;
    }

    function setPosition(x, y, alignRight) {
      _position.x = x;
      _position.y = y;
      if(alignRight) _position.alignLeft = false;
      else _position.alignLeft = true;
    }

    function setUser(user) {
      _user = user;
    }

  }

})();
