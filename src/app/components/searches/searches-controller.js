(function() {
    'use strict';
    angular.module('application').controller('SearchesController', function($rootScope, $scope, $log, $q, SearchesServices) {
        self = this;
        $rootScope.pageTitle = 'Home';

        self.numberOfSearchesToDisplay = '10';  
        self.searches = {};

        SearchesServices.getSearches().then(
          function(result) {

              self.searches = result;

          },
          function(err) {
              console.log('Error retrieving from endpoint: ', err);
          });

    });
})();
