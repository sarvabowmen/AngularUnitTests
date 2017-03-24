/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine-html.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/console.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/boot.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-route.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-mocks.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appModule.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appConfig.js" />




describe('Testing Routes', function () {
    var $route, $rootScope, $location, $httpBackend;

    beforeEach(function () {
        module('appModule');

        inject(function ($injector) {
            $route = $injector.get('$route');
            $rootScope = $injector.get('$rootScope');
            $location = $injector.get('$location');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', 'home.tpl.html').respond('home');
        });
    })

    it('should navigate to home', function () {
        // navigate using $apply to safely run the $digest cycle
        $rootScope.$apply(function () {
            $location.path('/home');
        });
        expect($location.path()).toBe('/home');
        expect($route.current.templateUrl).toBe('home.tpl.html');
        expect($route.current.controller).toBe('MainCtrl');
    })

    it('should redirect not registered urls to home', function () {
        // navigate using $apply to safely run the $digest cycle
        $rootScope.$apply(function () {
            $location.path('/other');
        });
        expect($location.path()).toBe('/home');
        expect($route.current.templateUrl).toBe('home.tpl.html');
        expect($route.current.controller).toBe('MainCtrl');
    })
})