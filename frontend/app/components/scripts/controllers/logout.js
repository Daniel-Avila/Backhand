'use strict';

angular.module('Backhand')
    .controller('LogoutCtrl', function ($scope, $location, djangoAuth) {
        djangoAuth.logout();
    });
