/**
 *
 * Created by sparky on 7/28/15.
 */
'use strict';

angular.module('Backhand')
    .controller('MasterController', function ($scope, $state, $controller) {
        $controller('MasterCtrl', {$scope: $scope});
        $scope.$on('djangoAuth.logged_in', function () {
            $scope.authenticated = true;
            $state.go('dashboard');
        })
    });