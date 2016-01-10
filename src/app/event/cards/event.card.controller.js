(function() {
  'use strict';

  angular
    .module('soonis.event.controllers')
    .controller('EventCardController', EventCardController);

  /** @ngInject */
  function EventCardController($log, $scope, EventsService) {
    var vm = this;

    _activate();

    function _activate() {
    }

  }
})();
