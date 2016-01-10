(function () {
  'use strict';

  angular
    .module('soonis.event.directives')
    .directive('eventFollowers', eventFollowers);

  function eventFollowers($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/event/components/_event.followers.html',
      controller: 'EventFollowersController',
      controllerAs: 'followersVM',
      replace: true,
      scope: {
        id: '='
      }
    }

    return directive;

  }

})();
