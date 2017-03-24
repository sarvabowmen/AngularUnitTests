angular.module('appModule').filter('myUpper', function() {
    return function(input) {
        return input.toUpperCase();
    };
});