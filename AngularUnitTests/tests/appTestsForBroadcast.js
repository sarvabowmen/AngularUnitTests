/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/jasmine-html.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/console.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/jasmine/boot.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-route.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\Scripts/angular-mocks.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appModule.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/SampleController.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appConfig.js" />
/// <reference path="E:\ProjectCode\AngularUnitTests\AngularUnitTests\app/appServiceWithBroadcast.js" />


describe("Message Bus", function () {
    var messageBus, $rootScope, $scope, $controller,
      user = { name: "John", id: 1 };
    var spyObj;
    beforeEach(function () {
        module("appModule");
        inject(function ($injector) {
            messageBus = $injector.get("messageBus");
            $rootScope = $injector.get("$rootScope");
            $controller = $injector.get('$controller');
            $scope = $rootScope.$new();
        });
        spyObj =spyOn($rootScope, '$broadcast').and.returnValue('fake');
        spyObj.and.callThrough();
        spyOn($rootScope, '$on').and.callThrough();
    });

    it("should broadcast 'global.user.logged' message", function () {
        // avoid calling $broadcast implementation
        $rootScope.$broadcast.and.stub();
        
        messageBus.userLogged(user);
        expect($rootScope.$broadcast).toHaveBeenCalled();
        expect($rootScope.$broadcast).toHaveBeenCalledWith("global.user.logged", user);
    });

    it("should trigger 'global.user.logged' listener", function () {
        // instantiate controller
        $controller('MainCtrl', { $scope: $scope });
        // trigger event
        messageBus.userLogged(user);
        expect($rootScope.$on).toHaveBeenCalled();
        expect($rootScope.$on).toHaveBeenCalledWith('global.user.logged', jasmine.any(Function));
        expect($scope.user).toEqual(user);
    });
});