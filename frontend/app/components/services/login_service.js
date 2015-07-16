/**
 *
 * Created by sparky on 7/14/15.
 */
angular.module('authServices', ['ngResource'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }])
    .factory('loginService', function ($rootScope, $http) {
        return {
            login: function () {
                $http.post('/api/v1/login/', {username: $rootScope.username, password: $rootScope.password})
                    .success(function (data, status, headers, config) {
                        $rootScope.userid = data.userid;
                    })
                    .error(function (data, status, headers, config) {
                        //redirect to a dashboard right here.
                        $rootScope.message = data;
                        $rootScope.userid = null;
                    });
            }
        };
    });
