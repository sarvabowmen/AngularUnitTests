angular.module('appModule').factory('LanguagesServicePromise', ['$http', '$q', function ($http, $q) {
    var lng = {};
    lng.get = function () {
        var deferred = $q.defer();
        $http.get('languages.json')
        .then(function (response) {
            var languages = response.data.map(function (item) {
                return item.name;
            });
            deferred.resolve(languages);
        })
        .catch(function (response) {
            deferred.reject(response);
        });
        return deferred.promise;
    }

    return lng;
}]);