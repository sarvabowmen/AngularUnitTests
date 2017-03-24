/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine-html.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/console.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/boot.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-mocks.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-route.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appModule.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/SampleController.js" />

// Suite
describe('Testing a controller', function () {
    var $controller;
    var $timeout;
    var $rootScope;

    // Setup for all tests
    beforeEach(function () {
        // loads the app module
        module('appModule');
        inject(function (_$controller_, _$timeout_, _$rootScope_) {
            // inject removes the underscores and finds the $controller Provider
            $controller = _$controller_;
            $timeout = _$timeout_;
            $rootScope = _$rootScope_;
        });
    });

    // Test (spec)
    it('should say \'Hello World\'', function () {
        var $scope = {};
        // $controller takes an object containing a reference to the $scope
        var controller = $controller('MainCtrl', { $scope: $scope, $timeout: $timeout, $rootScope: $rootScope });
        // the assertion checks the expected result
        expect($scope.title).toEqual('Hello World');
    });

    // Test (spec)
    it('Time out test', function () {
        var $scope = {};
        // $controller takes an object containing a reference to the $scope
        var controller = $controller('MainCtrl', { $scope: $scope });
        $timeout.flush();
        // the assertion checks the expected result
        expect($scope.timeout).toEqual('20');
    });

});