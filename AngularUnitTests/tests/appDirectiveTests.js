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

// Suite
describe('Testing my-directive', function () {
    var $rootScope, $compile, element, scope;

    beforeEach(function () {
        module('appModule');
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $compile = $injector.get('$compile');
            element = angular.element('<my-profile data="user"></my-profile>');
            scope = $rootScope.$new();
            // wrap scope changes using $apply
            scope.$apply(function () {
                scope.user = { name: "John" };
                $compile(element)(scope);
            });
        });
    });

    it('Name should be rendered', function () {
        expect(element[0].innerText).toEqual('John');
    });
});