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

// Suite
describe('Testing Languages Service', function () {
    var LanguagesService;

    beforeEach(function () {
        module('appModule');
        inject(function ($injector) {
            LanguagesService = $injector.get('LanguagesService');
        });
    });

    it('should return available languages', function () {
        var languages = LanguagesService.get();
        expect(languages).toContain('en');
        expect(languages).toContain('es');
        expect(languages).toContain('fr');
        expect(languages.length).toEqual(3);
    });
});