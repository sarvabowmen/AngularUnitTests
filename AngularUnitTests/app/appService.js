angular.module('appModule').factory('LanguagesService', function () {
    var lng = {},
      _languages = ['en', 'es', 'fr'];

    lng.get = function () {
        return _languages;
    }

    return lng;
});