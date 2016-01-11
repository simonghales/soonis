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
      },
      users: {
        followers: {
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
          _loadUsers();

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

    function _loadUsers() {
      _loadUsersFollowers();
      _loadUsersFollowing();
    }

    function _loadUsersFollowers() {
      UserService.getList({
        followed_by_user: vm.userId,
        limit: 100,
      })
        .then(function(data) {
          $log.debug("loaded user followers", data);
          vm.data.users.followers = data;

          vm.states.users.followers.loaded = true;
          vm.states.users.followers.loading = false;
        }, function(error) {
          $log.error("error", error);
          vm.states.users.followers.loaded = true;
          vm.states.users.followers.loading = false;
          vm.states.users.followers.error = true;
        });
    }

    function _loadUsersFollowing() {
      UserService.getList({
        following_user: vm.userId,
        limit: 100,
      })
        .then(function(data) {
          $log.debug("loaded users following", data);
          vm.data.users.following = data;

          vm.states.users.following.loaded = true;
          vm.states.users.following.loading = false;
        }, function(error) {
          $log.error("error", error);
          vm.states.users.following.loaded = true;
          vm.states.users.following.loading = false;
          vm.states.users.following.error = true;
        });
    }

  }
})();
