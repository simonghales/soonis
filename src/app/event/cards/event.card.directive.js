(function () {
  'use strict';

  angular
    .module('soonis.event.directives')
    .directive('eventCard', eventCard);

  function eventCard($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/event/cards/_event.card.html',
      controller: 'EventCardController',
      controllerAs: 'cardVM',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
