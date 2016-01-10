(function() {
  'use strict';

  angular
    .module('soonis', [

                      'soonis.general',
                      'soonis.event',
                      'soonis.user',

                      'ngAnimate',
                      'ngCookies',
                      'ngSanitize',
                      'restangular',
                      'ui.router',
                      'toastr',
                      'offClick',
                      'perfect_scrollbar'
                      ]);

  // General

  angular.module('soonis.general', [
    'soonis.general.controllers',
    'soonis.general.directives',
    'soonis.general.filters',
    'soonis.general.services'
  ]);

  angular.module('soonis.general.controllers', []);

  angular.module('soonis.general.directives', []);

  angular.module('soonis.general.filters', []);

  angular.module('soonis.general.services', []);

  // User

  angular.module('soonis.user', [
    'soonis.user.controllers',
    'soonis.user.services'
  ]);

  angular.module('soonis.user.controllers', []);

  angular.module('soonis.user.services', []);

  // User

  angular.module('soonis.event', [
    'soonis.event.controllers',
    'soonis.event.directives',
    'soonis.event.services'
  ]);

  angular.module('soonis.event.controllers', []);

  angular.module('soonis.event.directives', []);

  angular.module('soonis.event.services', []);

})();
