/**
 * Created by sparky on 7/14/15.
 */
angular.module('controllers.LoginController', ['ngResource'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }])
    .factory('loginService', function ($resource) {
        function add_auth_header(data, headersGetter) {
            var headers = headersGetter();
            headers['Authorization'] = ('Basic ' + btoa(data.username + ':' + data.password));
        }

        return {
            auth: $resource('/v1/api/login\\/', {}, {
                login: {method: 'POST', transformRequest: add_auth_header},
                logout: {method: 'DELETE'}
            })
        };
    })
    .controller('loginController', function ($scope, loginControllerFactory) {
        //$('#id_auth_form input').checkAndTriggerAutoFillEvent();

        $scope.getCredentials = function () {
            return {username: $scope.username, password: $scope.password};
        };
        $scope.login = function () {
            loginControllerFactory.auth.login($scope.getCredentials())
                .$promise
                .then(function (data) {
                    $scope.user = data.username;
                })
                .catch(function (data) {
                    alert(data.data.detail);
                });
        };
        $scope.logout = function () {
            loginControllerFactory.auth.logout(function () {
                $scope.user = undefined;
            });
        };
    });
