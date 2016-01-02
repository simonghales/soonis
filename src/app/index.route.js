(function() {
  'use strict';

  angular
    .module('soonis')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainVM'
      })
      .state('event', {
        url: '/e/:id/:slug',
        templateUrl: 'app/event/event.page.html',
        //controller: 'MainController',
        //controllerAs: 'mainVM'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
