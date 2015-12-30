(function () {
  'use strict';

  angular
    .module('soonis.event.directives')
    .directive('eventPreviewCard', eventPreviewCard);

  function eventPreviewCard($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/event/cards/_event.preview.card.html',
      replace: true,
      scope: false,
      //link: link
    }

    return directive;

    function link(scope, element, attributes) {

    }

  }

})();
