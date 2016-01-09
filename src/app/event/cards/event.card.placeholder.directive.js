(function () {
  'use strict';

  angular
    .module('soonis.event.directives')
    .directive('eventCardPlaceholder', eventCardPlaceholder);

  function eventCardPlaceholder($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/event/cards/_event.card.placeholder.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
