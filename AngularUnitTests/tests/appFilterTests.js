/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine-html.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/console.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/boot.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-mocks.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-route.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appModule.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/SampleController.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appService.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appDirective.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appFilter.js" />


describe('Testing myUpper Filter', function () {
    var myUpperFilter, $filter;

    beforeEach(function () {
        module('appModule');
        inject(function ($injector) {
            // append Filter to the filter name
            myUpperFilter = $injector.get('myUpperFilter');

            // usign $filter Provider
            $filter = $injector.get('$filter');
        });
    });

    it('should uppercase input', function () {
        expect(myUpperFilter('Home')).toEqual('HOME');
        // using $filter
        expect($filter('myUpper')('Home')).toEqual('HOME');
    })
})