(function () {
  'use strict';

  angular
    .module('soonis.event.directives')
    .directive('eventMiniCard', eventMiniCard);

  function eventMiniCard($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/event/cards/_event.mini.card.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
