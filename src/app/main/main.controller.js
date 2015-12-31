(function() {
  'use strict';

  angular
    .module('soonis')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    vm.slide = 0;

    vm.changeSlide = changeSlide;

    activate();

    function activate() {
    }

    function changeSlide(index) {
      vm.slide = index;
    }

  }
})();
