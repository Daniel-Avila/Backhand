describe('authServices config', function () {
    'use strict';
    var $httpProvider;
    /**
     * reference: https://medium.com/@a_eife/testing-config-and-run-blocks-in-angularjs-1809bd52977e
     */
    beforeEach(function () {
        angular.module('authServicesProviderConfig', [])
            .config(function (_$httpProvider_) {
                $httpProvider = _$httpProvider_;
                spyOn($httpProvider.defaults, 'xsrfCookieName');
            });
        module('authServicesProviderConfig');
        module('Backhand');
        inject();
    });
    it('should define xsrfCookieName tobe "csrftoken"', function () {
        expect($httpProvider.defaults.xsrfCookieName).toBe('csrftoken');
    });
    it('should define xsrfHeaderName = "X-CSRFToken"', function () {
        expect($httpProvider.defaults.xsrfHeaderName).toBe('X-CSRFToken');
    });
});

describe('AuthServices.loginService.isLoggedIn', function () {
    'use strict';
    var loginService, cst;
    beforeEach(module('authServices'));
    beforeEach(module('Backhand'));
    beforeEach(inject(function (_loginService_, _cst_) {
        loginService = _loginService_;
        cst = _cst_;
    }));
    it('should return false if user is not logged in', function () {
        expect(loginService.isLoggedIn()).toBe(false);
    });
});

describe('authServices.loginService.login', function () {
    'use strict';
    var loginService, $rootScope, $httpBackend, cst, username, password;
    beforeEach(module('authServices'));
    beforeEach(module('Backhand'));
    beforeEach(inject(function (_loginService_, _$rootScope_, _$httpBackend_, _cst_) {
        loginService = _loginService_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        $rootScope.userid = null;
        username = 'sparky';
        password = 'password';
        $rootScope.username = username;
        $rootScope.password = password;
        cst = _cst_;
    }));

    it('should have a login service defined', function () {
        expect(loginService).toBeDefined();
    });
    it('should be able to login a user with good credentials', function () {
        var result, authkey;
        authkey = 'myauthkey';
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: username, password: password})
            .respond(200, {key: authkey});
        result = loginService.login(username, password);
        $httpBackend.flush();
        expect(result.$$state.value.status).toEqual(200);
        expect(result.$$state.value.data.key).toEqual(authkey);
    });
    it('should fail to login a bad username/password pair', function () {
        var result;
        var expected = 'Username/Password is invalid.';
        $httpBackend.expectPOST(cst.REST.LOGIN, {username: username, password: password})
            .respond(400, expected);
        result = loginService.login(username, password);
        $httpBackend.flush();
        expect(result.$$state.value.status).toEqual(400);
        expect(result.$$state.value.data).toEqual(expected);
    })
});
