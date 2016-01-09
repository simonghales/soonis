/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('soonis')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('API_URL', 'https://pacific-thicket-4525.herokuapp.com');

})();
