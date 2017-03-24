/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine-html.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/console.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/boot.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-route.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-mocks.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appModule.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appConfig.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appServiceWithPromise.js" />

describe('Testing Languages Service - Promise', function () {
    var LanguagesServicePromise,
      $httpBackend,
      jsonResponse = [{ "name": "en" }, { "name": "es" }, { "name": "fr" }];

    beforeEach(function () {
        module('appModule');
        inject(function ($injector) {
            LanguagesServicePromise = $injector.get('LanguagesServicePromise');
            // set up the mock http service
            $httpBackend = $injector.get('$httpBackend');

            // backend definition response common for all tests
            $httpBackend.whenGET('languages.json')
              .respond(jsonResponse);
        });
    });

    it('should return available languages', function (done) {
        // service returns a promise
        var promise = LanguagesServicePromise.get();
        // use promise as usual
        promise.then(function (languages) {
            // same tests as before
            expect(languages).toContain('en');
            expect(languages).toContain('es');
            expect(languages).toContain('fr');
            expect(languages.length).toEqual(3);
            // Spec waits till done is called or Timeout kicks in
            done();
        });
        // flushes pending requests
        $httpBackend.flush();
    });
});
