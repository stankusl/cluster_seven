(function() {
    'use strict';
    angular.module('application').controller('FilesController', function($rootScope, $scope, $log, $q, FileServices) {
        self = this;
        $rootScope.pageTitle = 'Home';


        self.files = {};

        FileServices.getSearch().then(
          function(result) {
              console.log(result);
              self.files = result;

          },
          function(err) {
              console.log('Error retrieving from endpoint: ', err);
          });

    });
})();