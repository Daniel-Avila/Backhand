describe('Unit Test: components.controllers.login', function () {
    var $httpBackend, $rootScope, loginController;
    //get my main app module
    beforeEach(module('Backhand'));
    //get my loginController
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');
        loginController = function () {
            return $controller('LoginController', {'$scope': $rootScope});
        };
    }));
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    it('should return 404 if the username/pass is bad', function () {
        var expected1 = 404;
        var expected2 = 'Bad username or password';
        var data = {'username': 'username', 'password': 'pass'};
        $httpBackend.expectPOST('/v1/api/login', data).respond(404, 'DATA', {}, 'Bad username or password');
        var controller = loginController();
        result = controller.login('username', 'pass');
        expect(result.status).toBe(expected1);
        expect(result.message).toBe(expected2);
    });
});
