(function() {
  'use strict';

  angular
    .module('soonis.event.controllers')
    .controller('EventFollowersController', EventFollowersController);

  /** @ngInject */
  function EventFollowersController($log, $scope, UserService) {
    var vm = this;

    vm.data = {
      users: null
    };

    vm.states = {
      loading: true,
      loaded: false,
      error: false
    };

    _activate();

    function _activate() {
      if($scope.id) {
        _loadFollowers();
      } else {
        // listen for when scope.id becomes available
      }
    }

    function _loadFollowers() {

      UserService.getList({
        following_event: $scope.id,
        limit: 100
      })
        .then(function (data) {
          $log.debug("loaded followers", data);
          vm.data.users = data;

          vm.states.loaded = true;
          vm.states.loading = false;
        }, function (error) {
          $log.error("something went wrong dude", error);
          vm.states.loaded = true;
          vm.states.loading = false;
          vm.states.error = true;
        });

    }

  }
})();
