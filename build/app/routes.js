(function() {
    'use strict';

    angular.module('application')

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('searches', {
                url: '/',
                templateUrl: './app/components/searches/searches-index.html',
                controller: 'SearchesController',
                controllerAs: 'Searches'
            })

            .state('files', {
                url: '/search/:index',
                templateUrl: './app/components/searches/files/files-index.html',
                controller: 'FilesController',
                controllerAs: 'File'
            })

        $urlRouterProvider.otherwise('/');
    }]);

})();