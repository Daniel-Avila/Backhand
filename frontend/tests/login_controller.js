/**
 * Created by sparky on 7/16/15.
 */

describe('LoginController', function () {
    var $controller, $httpBackend;
    beforeEach(module('Backhand'));
    beforeEach(inject(function (_$controller_, _$httpBackend_, _cst_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        cst = _cst_;


    }));
    it('should set the scope userid to the user name upon success', function () {
        var $scope = {username: 'sparky', password: 'pass'};
        var loginController = $controller('loginController', {$scope: $scope});
        var authkey = 'mak';
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: 'sparky', password: 'pass'})
            .respond(200, {key: authkey}, {}, 'OK');
        $scope.login();
        $httpBackend.flush();
        expect($scope.authtoken).toEqual(authkey);


    });
    it('should set the scope userid and message upon failure', function () {
        var $scope = {username: 'sparky', password: 'pass'};
        var loginController = $controller('loginController', {$scope: $scope});
        var expected_msg = {non_field_errors: ["Unable to log in with provided credentials."]};
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: 'sparky', password: 'pass'})
            .respond(400, expected_msg, {}, 'Not Found');
        $scope.login();
        $httpBackend.flush();
        expect($scope.authtoken).toEqual(null);
        expect($scope.message).toEqual(expected_msg.non_field_errors[0]);
    });
    it('should redirect the user to the /dashboard upon success', function () {

    });
});
