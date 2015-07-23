/**
 * Created by sparky on 7/14/15.
 */
angular.module('DashboardControllers', [])
    .controller('dashboardController',
    ['$state', '$scope', 'cst', function ($state, $scope, cst) {
        if ($scope.authtoken === null) {
            alert($scope.authtoken);
            $state.go(cst.STATE.LOGIN);
        } else if ($scope.authtoken === undefined) {
            alert($scope.authtoken);
            $state.go(cst.STATE.LOGIN);
        } else {
        }
    }]
);
