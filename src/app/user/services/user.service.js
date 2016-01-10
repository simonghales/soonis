(function () {
  'use strict';

  angular
    .module('soonis.user.services')
    .factory('UserService', UserService);

  /** @ngInject */
  function UserService($log, Restangular) {

    var service = Restangular.service('api/users');

    return service;

  }

})();
