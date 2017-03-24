angular.module('appModule').controller('MainCtrl', function ($scope, $timeout, $rootScope) {
    $scope.title = 'Hello World';
    $timeout(function () { $scope.timeout = "20" }, 20);
    $rootScope.$on("global.user.logged", function (event, user) {
        $scope.user = user;
    });
});