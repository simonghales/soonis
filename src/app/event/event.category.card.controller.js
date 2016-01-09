(function() {
  'use strict';

  angular
    .module('soonis.event.controllers')
    .controller('EventCategoryCardController', EventCategoryCardController);

  /** @ngInject */
  function EventCategoryCardController($log, $scope, EventsService) {
    var vm = this;

    vm.data = {
      events: null
    }

    vm.states = {
      error: false,
      loading: true,
      loaded: false
    }

    vm.placeholder = [];

    _activate();

    function _activate() {
      _loadEvents();

      for(var i = 0; i < $scope.limit; i++) {
        vm.placeholder.push({});
      }

    }

    function _loadEvents() {
      $log.debug("load ma events for this category", $scope.categoryData.name);

      EventsService.getList({
        cat: $scope.categoryData.slug,
        hide_unlisted: true,
        limit: $scope.limit
      })
        .then(function(data) {
          vm.data.events = data;
          $log.debug("Loaded events", data);
          vm.states.loaded = true;
          vm.states.loading = false;

        }, function(error) {
          $log.warn("Error", error);
          vm.states.loaded = true;
          vm.states.loading = false;
          vm.states.error = true;
        });

    }

  }
})();
