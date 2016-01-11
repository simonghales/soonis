(function() {
  'use strict';

  angular
    .module('soonis.event.controllers')
    .controller('EventController', EventController);

  /** @ngInject */
  function EventController($log, $scope, $stateParams, EventsService, EventsCommentsService) {
    var vm = this;

    vm.eventId = $stateParams.id;

    vm.data = {
      comments: null,
      event: null
    }

    vm.states = {
      error: false,
      loading: true,
      loaded: false,
      comments: {
        error: false,
        loading: true,
        loaded: false
      }
    }

    _activate();

    function _activate() {
      _loadEvent();
    }

    function _loadComments() {

      EventsCommentsService.getList({
        event: vm.eventId,
        limit: 20
      })
        .then(function(data) {

          vm.data.comments = data;

          vm.states.comments.loaded = true;
          vm.states.comments.loading = false;
        }, function(error) {
          $log.error("error", error);
          vm.states.comments.loaded = true;
          vm.states.comments.loading = false;
          vm.states.comments.error = true;
        });

    }

    function _loadEvent() {
      $log.debug("event service", EventsService);
      EventsService.one(vm.eventId).get()
        .then(function(data) {
          $log.debug("loaded event", data);
          vm.data.event = data;

          vm.states.loaded = true;
          vm.states.loading = false;
          _loadComments();
        }, function(error) {
          $log.error("error", error);

          vm.states.loaded = true;
          vm.states.loading = false;
          vm.states.error = true;
        });
    }

  }
})();
