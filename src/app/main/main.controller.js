(function() {
  'use strict';

  angular
    .module('soonis')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, EventsCategoriesService) {
    var vm = this;

    vm.data = {
      categories: null,
      categoriesSorted: null,
      events: null
    }

    vm.states = {
      categories: {
        error: false,
        loading: false,
        loaded: false
      }
    }

    vm.slide = 0;
    vm.userAction = false;

    vm.changeSlide = changeSlide;

    _activate();

    function changeSlide(index) {
      vm.userAction = true;
      vm.slide = index;
    }

    function _activate() {
      _loadCategories();
    }

    function _loadCategories() {

      vm.states.categories.loading = true;

      EventsCategoriesService.getList()
        .then(function(data) {
          vm.data.categories = data;
          $log.debug("Loaded categories", data);

          vm.data.categoriesSorted = EventsCategoriesService.prepHomeCategories(data.plain());
          $log.debug("Sorted", vm.data.categoriesSorted);


          vm.states.categories.loaded = true;
          vm.states.categories.loading = false;

        }, function(error) {
          $log.warn("Error", error);
          vm.states.categories.loaded = true;
          vm.states.categories.loading = false;
          vm.states.categories.error = true;
        });
    }

    function _loadEvents() {

    }

  }
})();
