(function () {
  'use strict';

  angular
    .module('soonis.event.directives')
    .directive('eventCategory', eventCategory);

  function eventCategory($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/event/_event.category.card.html',
      controller: 'EventCategoryCardController',
      controllerAs: 'categoryVM',
      replace: true,
      scope: {
        limit: '@',
        category: '@',
        categoryData: '='
      }
    }

    return directive;

  }

})();
