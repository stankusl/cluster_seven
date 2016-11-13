(function() {
    'use strict';
    angular.module('application').controller('FileController', function($rootScope, $scope, $log, $q, FileServices) {
        self = this;
        $rootScope.pageTitle = 'Home';


        self.searches = {};

        FileServices.getSearches().then(
          function(result) {
              console.log(result);
              self.searches = result;

          },
          function(err) {
              console.log('Error retrieving from endpoint: ', err);
          });

    });
})();