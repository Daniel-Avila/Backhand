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
    var loginService, httpProvider, testedService;
    beforeEach(module('authServices'));
    beforeEach(inject(function (_loginService_) {
        loginService = _loginService_;
    }));

    it('should have a login service defined', function () {
        expect(loginService).toBeDefined();
    });
    it('should have a name property that has an expected value', function () {
        var expected = 'sparky';
        expect(loginService.name).toBe(expected);
    });
});
