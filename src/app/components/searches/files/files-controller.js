(function() {
    'use strict';
    angular.module('application').controller('FilesController', function($rootScope, $scope, $log, $q, $stateParams, FileServices) {
        self = this;
        $rootScope.pageTitle = 'Home';

        self.numberOfSearchesToDisplay = '100';
        self.files = {};

        self.returnExtension = function(filePath){
          var extension = (/[.]/.exec(filePath)) ? /[^.]+$/.exec(filePath)[0] : undefined;

          return extension.toLowerCase();
        }

        self.returnName = function(filePath) {
            var filename = filePath.replace(/^.*[\\\/]/, '')
            return filename;
        }

        FileServices.getSearch($stateParams.index).then(
            function(result) {
                self.files = result;
            },
            function(err) {
                console.log('Error retrieving from endpoint: ', err);
            });

    });
})();
