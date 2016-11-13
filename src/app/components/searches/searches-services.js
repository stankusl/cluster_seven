(function() {
    'use strict';

    angular.module('application').factory('SearchesServices', ['$http', '$q', '$log', '$rootScope', SearchesServices]);

    function SearchesServices($http, $q, $log, $rootScope) {

        // Retrieving available Cards
        var endpoint = 'http://c7webtest.azurewebsites.net/';

        return {
            getSearches: getSearches
        };

        //getCards
        function getSearches() {
            var deferred = $q.defer();


            $http({
                    method: "GET",
                    url: endpoint + 'searches'
                })
                .then(function(response) {
                    deferred.resolve(response.data);
                })
                .catch(function(response) {
                    $log.error('Error retrieving Clients: ' + response.statusText);
                    return $q.reject('Error retrieving Clients.');
                });

            return deferred.promise;
        }


    };
})();
