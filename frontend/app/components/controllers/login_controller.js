/**
 * Created by sparky on 7/14/15.
 */
angular.module('BackhandControllers', [])
    .controller('loginController', function ($scope, $location, loginService, cst) {

        $scope.getCredentials = function () {
            return {username: $scope.username, password: $scope.password};
        };
        $scope.login = function () {
            var creds;
            creds = $scope.getCredentials();
            loginService.login(creds.username, creds.password)
                .success(function (data, status, headers, config) {
                    $scope.authtoken = data.key;
                    $location.path(cst.APP.DASHBOARD);
                })
                .error(function (data, status, headers, config) {
                    //redirect to a dashboard right here.

                    $scope.message = data.non_field_errors[0];
                    $scope.authtoken = null;
                });
        };
    });




