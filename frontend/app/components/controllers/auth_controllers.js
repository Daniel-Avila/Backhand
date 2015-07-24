/**
 * Created by sparky on 7/14/15.
 */
angular.module('AuthControllers', [])
    .controller('loginController', ['$http', '$scope', '$state', 'authState', 'loginService', 'cst',
        function ($http, $scope, $state, authState, loginService, cst) {

            $scope.getCredentials = function () {
                return {username: $scope.username, password: $scope.password};
            };
            $scope.login = function () {
                var creds;
                creds = $scope.getCredentials();
                loginService.login(creds.username, creds.password)
                    .success(function (data, status, headers, config) {
                        authState.authenticated = true;
                        authState.authtoken = data.key;
                        $state.go(cst.STATE.DASHBOARD);
                    })
                    .error(function (data, status, headers, config) {
                        authState.authenticated = false;
                        $scope.errors = data;
                        authState.authtoken = null;
                        $state.go(cst.STATE.LOGIN);
                    });
            };
            $scope.logout = function () {
                authState.authenticated = false;
                authState.authtoken = null;
            };
        }]);




