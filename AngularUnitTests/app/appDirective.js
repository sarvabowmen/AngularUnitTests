angular.module('appModule').directive('myProfile', function () {
    return {
        restrict: 'E',
        template: '<div>{{user.name}}</div>',
        //templateUrl: 'path/template.tpl.html'
        scope: {
            user: '=data'
        },
        replace: true
    };
});