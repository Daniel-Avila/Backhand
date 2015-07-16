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


describe('authServices.loginService', function () {
    'use strict';
    var loginService, $rootScope, $httpBackend, username, password;
    beforeEach(module('authServices'));
    beforeEach(inject(function (_loginService_, _$rootScope_, _$httpBackend_) {
        loginService = _loginService_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        $rootScope.userid = null;
        username = 'sparky';
        password = 'password';
        $rootScope.username = username;
        $rootScope.password = password;
    }));

    it('should have a login service defined', function () {
        expect(loginService).toBeDefined();
    });
    it('should be able to login a user with good credentials', function () {

        $httpBackend.expectPOST('/api/v1/login/', {username: username, password: password})
            .respond(200, {userid: username});
        loginService.login();
        $httpBackend.flush();
        expect($rootScope.userid).toBe(username);
    });
    it('should fail to login a bad username/password pair', function () {
        var expected = 'Username/Password is invalid.';
        $httpBackend.expectPOST('/api/v1/login/', {username: username, password: password})
            .respond(404, expected);
        loginService.login();
        $httpBackend.flush();
        expect($rootScope.message).toBe(expected);
        expect($rootScope.userid).toBe(null);
    })
});
