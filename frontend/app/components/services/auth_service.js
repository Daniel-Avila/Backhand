/**
 *
 * Created by sparky on 7/14/15.
 */
angular.module('authServices', ['ngResource'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }])
    .service('authState', function () {
        //This is where all the user info will go. eventually
        var serv, loggedin;
        serv = {
            authenticated: false
        };
        loggedin = function () {
            return serv.authenticated;
        };
        serv.isLoggedIn = loggedin;
        return serv
    })
    .factory('loginService', function ($http, cst) {
        return {
            login: function (user, pass) {
                return $http.post(cst.REST.LOGIN, {username: user, password: pass});
            },
            'logout': function () {
                return $http.post(cst.REST.LOGOUT);
            }
        };
    });
