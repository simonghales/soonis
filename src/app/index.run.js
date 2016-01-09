(function() {
  'use strict';

  angular
    .module('soonis')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log, $anchorScroll) {

    _routeEvents();

    function _routeEvents() {

      $rootScope.$on('$stateChangeStart', function() {

        //$anchorScroll();

      });

      $rootScope.$on('$stateChangeSuccess', function() {

        $anchorScroll();

      });

    }

    $log.debug('runBlock end');
  }

})();
