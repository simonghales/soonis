(function () {
  'use strict';

  angular
    .module('soonis.event.services')
    .factory('EventsCategoriesService', EventsCategoriesService);

  /** @ngInject */
  function EventsCategoriesService($log, Restangular) {

    var service = Restangular.service('api/categories');
    service.prepHomeCategories = prepHomeCategories;
    return service;

    function prepHomeCategories(categories) {

      var foundSpace = false;

      var results = {
        featured: null,
        categories: null
      }

      for (var i = 0, len = categories.length; i < len; i++) {
        if(categories[i].name === 'Space') {
          foundSpace = true;
          results.featured = categories[i];
          categories.splice(i, 1);
          results.categories = categories;
          break;
        }
      }

      if(!foundSpace) {
        results = {
          featured: categories[0],
          categories: categories.splice(1, categories.length)
        };
      }

      return results;
    }

  }

})();
