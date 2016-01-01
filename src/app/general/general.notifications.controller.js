(function() {
  'use strict';

  angular
    .module('soonis.general.controllers')
    .controller('NotificationsController', NotificationsController);

  /** @ngInject */
  function NotificationsController($log) {
    var vm = this;

    vm.states = {
      notificationsOpen: false
    };

    vm.toggleNotifications = toggleNotifications;
    vm.openNotifications = openNotifications;
    vm.closeNotifications = closeNotifications;

    activate();

    function activate() {
    }

    function toggleNotifications() {

      if(vm.states.notificationsOpen) {
        closeNotifications();
      } else {
        openNotifications();
      }

    }

    function openNotifications() {
      vm.states.notificationsOpen = true;
    }

    function closeNotifications() {
      vm.states.notificationsOpen = false;
    }

  }
})();
