(function() {
  'use strict';

  angular.module('soonis.general.filters').filter('slugify', function (SlugifyService) {
    return function (val) {
      if(!val) return;
      return SlugifyService.slugify(val);
    };
  });


})();
