(function() {
  'use strict';

  angular
    .module('soonis.general.controllers')
    .controller('HeaderController', HeaderController);

  /** @ngInject */
  function HeaderController($log) {
    var vm = this;

    vm.states = {
      userOpen: false
    };

    vm.toggleUser= toggleUser;
    vm.openUser = openUser;
    vm.closeUser = closeUser;

    activate();

    function activate() {
    }

    function toggleUser() {

      if(vm.states.userOpen) {
        closeUser();
      } else {
        openUser();
      }

    }

    function openUser() {
      vm.states.userOpen = true;
    }

    function closeUser() {
      vm.states.userOpen = false;
    }

  }
})();
