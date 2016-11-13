(function() {
    'use strict';
    angular.module('application').controller('SearchesController', function($rootScope, $scope, $log, $q, SearchesServices) {
        self = this;
        $rootScope.pageTitle = 'Home';


        self.searches = {};

        SearchesServices.getSearches().then(
          function(result) {
              console.log(result);
              self.searches = result;

          },
          function(err) {
              console.log('Error retrieving from endpoint: ', err);
          });

    });
})();