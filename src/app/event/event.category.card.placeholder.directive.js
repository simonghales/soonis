(function () {
  'use strict';

  angular
    .module('soonis.event.directives')
    .directive('eventCategoryPlaceholder', eventCategoryPlaceholder);

  function eventCategoryPlaceholder($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/event/_event.category.card.placeholder.html',
      replace: true,
      scope: {
        limit: '@',
        category: '@',
      }
    }

    return directive;

  }

})();
