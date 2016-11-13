(function() {
    'use strict';

    angular.module('application').factory('FileServices', ['$http', '$q', '$log', '$rootScope', FileServices]);

    function FileServices($http, $q, $log, $rootScope) {

        // Retrieving available Cards
        var endpoint = 'http://c7webtest.azurewebsites.net/';

        return {
            getSearch : getSearch
        };


        function getSearch(index) {
          var deferred = $q.defer();

          $http({
                  method: "GET",
                  url: endpoint + 'searches/' + index + '/results'
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
