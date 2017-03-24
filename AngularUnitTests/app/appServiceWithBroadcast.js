angular.module('appModule').factory("messageBus", ['$rootScope', function ($rootScope) {
    var bus = {};

    bus.userLogged = function (user) {
        $rootScope.$broadcast("global.user.logged", user);
    };

    return bus;
}]);