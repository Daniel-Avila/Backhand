/**
 * Created by sparky on 7/14/15.
 */
angular.module('LoginController', [])
    .controller('loginController', function ($scope, authService) {

        $scope.getCredentials = function () {
            return {username: $scope.username, password: $scope.password};
        };
        $scope.login = function () {
            var creds;
            creds = $scope.getCredentials();
            authService.login(creds.username, creds.password)
                .success(function (data, status, headers, config) {
                    $scope.userid = data.userid;
                })
                .error(function (data, status, headers, config) {
                    //redirect to a dashboard right here.
                    $scope.message = data;
                    $scope.userid = null;
                });
        };
    });




