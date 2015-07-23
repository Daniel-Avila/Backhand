'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Backhand', function () {


    it('should automatically redirect to / when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });


    describe('login', function () {

        beforeEach(function () {
            browser.get('#/login');
        });


        it('should render login page when user navigates to /login/', function () {
            browser.get('#/login');
            expect(element.all(by.id('logincontainer')).first().getText()).
                toMatch(/Login\nEmail\nPassword\nSubmit/);
        });

        it('should render login page when user is not logged in and tries to access dashboard', function () {
            browser.get('#/dashboard');
            expect(browser.getLocationAbsUrl()).toMatch("/login/");
        });
    });


    describe('dashboard', function () {

        beforeEach(function () {
            browser.get('#/login');
        });


        it('should render dashboard after the user successfully logs in', function () {
            var username, password, submit;
            username = element(by.id('login__email'));
            password = element(by.id('login__password'));
            submit = element(by.css('btn-primary'));
            username.sendKeys('sparky');
            password.sendKeys('password');
            submit.click();
            expect(element.all(by.id('dashcontainer')).first().getText()).
                toMatch(/Welcome dashboard/);
        });

    });
});
