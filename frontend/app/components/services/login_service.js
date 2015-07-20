/**
 *
 * Created by sparky on 7/14/15.
 */
angular.module('authServices', ['ngResource'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }])
    .factory('loginService', function ($http) {
        return {
            login: function (user, pass) {
                return $http.post(cst.REST.LOGIN, {username: user, password: pass});
            }
        };
    });
