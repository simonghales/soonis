(function() {
  'use strict';

  angular
    .module('soonis.user.controllers')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController($log, $scope, $stateParams, EventsService, UserService) {
    var vm = this;

    vm.userId = $stateParams.id;

    vm.data = {
      events: {
        created: null,
        following: null
      },
      user: null,
      users: {
        following: null,
        followers: null
      }
    }

    vm.states = {
      error: false,
      loading: true,
      loaded: false,
      events: {
        created: {
          error: false,
          loading: true,
          loaded: false
        },
        following: {
          error: false,
          loading: true,
          loaded: false
        }
      }
    }

    _activate();

    function _activate() {
      if(vm.userId) {
        _loadUser();
      }
    }

    function _loadEvents() {
      _loadEventsCreated();
      _loadEventsFollowing();
    }

    function _loadEventsCreated() {
      EventsService.getList({
        author: vm.userId,
        limit: 3,
        order: 'expiry'
      })
        .then(function(data) {
          $log.debug("loaded created", data);
          vm.data.events.created = data;

          vm.states.events.created.loaded = true;
          vm.states.events.created.loading = false;
        }, function(error) {
          $log.error("error", error);
          vm.states.events.created.loaded = true;
          vm.states.events.created.loading = false;
          vm.states.events.created.error = true;
        });
    }

    function _loadEventsFollowing() {
      EventsService.getList({
        followed_by: vm.userId,
        limit: 3,
        order: 'expiry'
      })
        .then(function(data) {
          $log.debug("loaded followed", data);
          vm.data.events.following = data;

          vm.states.events.following.loaded = true;
          vm.states.events.following.loading = false;
        }, function(error) {
          $log.error("error", error);
          vm.states.events.following.loaded = true;
          vm.states.events.following.loading = false;
          vm.states.events.following.error = true;
        });
    }

    function _loadUser() {

      UserService.one(vm.userId).get()
        .then(function(data) {
          $log.debug("loaded user", data);

          _loadEvents();

          vm.data.user = data;
          vm.states.loaded = true;
          vm.states.loading = false;
        }, function(error) {
          $log.error("error", error);
          vm.states.loaded = true;
          vm.states.loading = false;
          vm.states.error = true;
        });

    }

  }
})();
