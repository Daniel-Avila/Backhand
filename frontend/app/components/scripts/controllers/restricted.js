'use strict';

/**
 * @ngdoc function
 * @name Backhand.controller:RestrictedCtrl
 * @description
 * # RestrictedCtrl
 * Controller of the Backhand
 */
angular.module('Backhand')
    .controller('RestrictedCtrl', function ($scope, $location) {
        $scope.$on('djangoAuth.logged_in', function () {
            $location.path('/');
        });
    });
