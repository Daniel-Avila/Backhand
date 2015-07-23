/**
 * Created by sparky on 7/16/15.
 */

describe('LoginController', function () {
    var $controller, $httpBackend, $location;
    beforeEach(module('Backhand'));
    beforeEach(inject(function (_$controller_, _$location_, _$httpBackend_, _cst_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $location = _$location_;
        cst = _cst_;


    }));
    it('should set the scope userid to the user name upon success', function () {
        var $scope = {username: 'sparky', password: 'pass'};
        var loginController = $controller('loginController', {$scope: $scope});
        var authkey = 'mak';
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: 'sparky', password: 'pass'})
            .respond(200, {key: authkey}, {}, 'OK');
        $httpBackend.whenGET(cst.TEMPLATES.DASHBOARD).respond(200);
        $httpBackend.whenGET(cst.TEMPLATES.HOME).respond(200);
        $scope.login();
        $httpBackend.flush();
        expect($scope.authtoken).toEqual(authkey);


    });
    it('should set the scope userid and message upon failure', function () {
        var $scope = {username: 'sparky', password: 'pass'};
        var loginController = $controller('loginController', {$scope: $scope});
        var expected_msg = {non_field_errors: ["Unable to log in with provided credentials."]};
        $httpBackend.whenGET(cst.TEMPLATES.HOME).respond(200);
        $httpBackend.whenGET(cst.TEMPLATES.LOGIN).respond(200);
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: 'sparky', password: 'pass'})
            .respond(400, expected_msg, {}, 'Not Found');
        $scope.login();
        $httpBackend.flush();
        expect($scope.authtoken).toEqual(null);
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
        expect($scope.authtoken).toEqual(authkey);
    });
});
