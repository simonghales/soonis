(function () {
  'use strict';

  angular
    .module('soonis.event.services')
    .factory('EventsService', EventsService);

  /** @ngInject */
  function EventsService($log, Restangular) {

    var service = Restangular.service('api/events');

    return service;

  }

})();
