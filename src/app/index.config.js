(function() {
  'use strict';

  angular
    .module('soonis')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, RestangularProvider, API_URL) {
    // Enable log
    $logProvider.debugEnabled(true);

    RestangularProvider.setBaseUrl(API_URL);
    RestangularProvider.setRequestSuffix('/.json');

    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      var extractedData;
      if (operation === "getList") {
        extractedData = data.results;
        extractedData.meta = {
          count: data.count,
          next: data.next,
          previous: data.previous,
        }
      } else {
        extractedData = data;
      }
      return extractedData;
    });

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
