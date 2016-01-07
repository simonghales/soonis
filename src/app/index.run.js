(function() {
  'use strict';

  angular
    .module('soonis')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log) {

    _routeEvents();

    function _routeEvents() {



    }

    $log.debug('runBlock end');
  }

})();
