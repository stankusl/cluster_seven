(function() {
    'use strict';
    angular.module('application').controller('FilesController', function($rootScope, $scope, $log, $q, $stateParams, FileServices) {
        self = this;
        $rootScope.pageTitle = 'Home';

        self.numberOfSearchesToDisplay = '10';
        self.files = {};

        FileServices.getSearch($stateParams.index).then(
            function(result) {
                self.files = result;
            },
            function(err) {
                console.log('Error retrieving from endpoint: ', err);
            });

    });
})();
