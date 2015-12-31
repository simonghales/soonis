(function() {
  'use strict';

  angular
    .module('soonis')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    vm.slide = 0;
    vm.userAction = false;

    vm.changeSlide = changeSlide;

    activate();

    function activate() {
    }

    function changeSlide(index) {
      vm.userAction = true;
      vm.slide = index;
    }

  }
})();
