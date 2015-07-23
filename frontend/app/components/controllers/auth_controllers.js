/**
 * Created by sparky on 7/14/15.
 */
angular.module('AuthControllers', [])
    .controller('loginController', ['$scope', '$state', 'loginService', 'cst',
        function ($scope, $state, loginService, cst) {

        $scope.getCredentials = function () {
            return {username: $scope.username, password: $scope.password};
        };
        $scope.login = function () {
            var creds;
            creds = $scope.getCredentials();
            loginService.login(creds.username, creds.password)
                .success(function (data, status, headers, config) {
                    $scope.authtoken = data.key;
                    $state.go(cst.STATE.DASHBOARD);

                })
                .error(function (data, status, headers, config) {
                    $state.go(cst.STATE.LOGIN);
                    $scope.errors = data;
                    $scope.authtoken = null;

                });
        };
        }]);




