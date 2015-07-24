/**
 * Created by sparky on 7/16/15.
 */
describe('LoginController.logout', function () {
    var $controller, $httpBackend, cst;
    beforeEach(module('Backhand'));
    beforeEach(inject(function (_$controller_, _$httpBackend_, _cst_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        cst = _cst_
    }));

    it('should log the user out and set authenticated to false', function () {
        var $scope = {};
        var loginController = $controller('loginController', {$scope: $scope});
        $httpBackend.expectPOST(cst.REST.LOGOUT).respond(200);
    })

});
describe('LoginController.login', function () {
    var $controller, $httpBackend, $location, authState, cst;
    beforeEach(module('Backhand'));
    beforeEach(inject(function (_$controller_, _$location_, _$httpBackend_, _authState_, _cst_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $location = _$location_;
        cst = _cst_;
        authState = _authState_;


    }));
    it('should set the authState authtoken upon success', function () {
        var $scope = {username: 'sparky', password: 'pass'};
        var loginController = $controller('loginController', {$scope: $scope});
        var authkey = 'mak';
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: 'sparky', password: 'pass'})
            .respond(200, {key: authkey}, {}, 'OK');
        $httpBackend.whenGET(cst.TEMPLATES.DASHBOARD).respond(200);
        $httpBackend.whenGET(cst.TEMPLATES.HOME).respond(200);
        $scope.login();
        $httpBackend.flush();
        expect(authState.authtoken).toEqual(authkey);


    });
    it('should set the authState.authtoken to null and scope.message upon failure', function () {
        var $scope = {username: 'sparky', password: 'pass'};
        var loginController = $controller('loginController', {$scope: $scope});
        var expected_msg = {non_field_errors: ["Unable to log in with provided credentials."]};
        $httpBackend.whenGET(cst.TEMPLATES.HOME).respond(200);
        $httpBackend.whenGET(cst.TEMPLATES.LOGIN).respond(200);
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: 'sparky', password: 'pass'})
            .respond(400, expected_msg, {}, 'Not Found');
        $scope.login();
        $httpBackend.flush();
        expect(authState.authtoken).toEqual(null);
        expect($scope.errors).toEqual(expected_msg);
        expect($location.path()).toEqual(cst.APP.LOGIN);
    });
    it('should redirect the user to the /dashboard upon success', function () {
        var $scope = {username: 'sparky', password: 'pass'};
        var loginController = $controller('loginController', {$scope: $scope});
        var authkey = 'mak';
        $location.path(cst.APP.LOGIN);
        $httpBackend.whenGET(cst.TEMPLATES.HOME).respond(200);
        $httpBackend.whenGET(cst.TEMPLATES.LOGIN).respond(200);
        $httpBackend.whenGET(cst.TEMPLATES.DASHBOARD).respond(200);
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: 'sparky', password: 'pass'})
            .respond(200, {key: authkey}, {}, 'OK');
        $scope.login();
        $httpBackend.flush();
        expect($location.path()).toEqual(cst.APP.DASHBOARD);
        expect(authState.authtoken).toEqual(authkey);
    });
});
