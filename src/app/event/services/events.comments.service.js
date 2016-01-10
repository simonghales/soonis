(function () {
  'use strict';

  angular
    .module('soonis.event.services')
    .factory('EventsCommentsService', EventsCommentsService);

  /** @ngInject */
  function EventsCommentsService($log, Restangular) {

    var service = Restangular.service('api/comments');
    return service;

  }

})();
