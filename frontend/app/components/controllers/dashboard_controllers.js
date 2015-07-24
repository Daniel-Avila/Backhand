/**
 * Created by sparky on 7/14/15.
 */
angular.module('DashboardControllers', [])
    .controller('dashboardController',
    ['$state', '$scope', 'authState', 'cst', function ($state, $scope, authState, cst) {
        if (authState.authenticated === false) {
            $state.go(cst.STATE.LOGIN);
        } else if (authState.authenticated === undefined) {
            $state.go(cst.STATE.LOGIN);
        } else {
        }
    }]
);
