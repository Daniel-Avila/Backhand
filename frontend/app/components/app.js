'use strict';

// Declare app level module which depends on views, and components
angular.module('Backhand', ['authServices', 'ngRoute', 'BackhandControllers'])
    .config(function ($routeProvider, cst) {
        $routeProvider
            .when(cst.APP.HOME, {
                templateUrl: 'home.html',
                controller: 'HomeController'
            })
            .when(cst.APP.LOGIN, {
                templateUrl: 'login.html',
                controller: 'loginController'
            })
            .when(cst.APP.DASHBOARD, {
                templateUrl: 'dashboard.html',
                controller: 'dashboardController'
            });

    })
    .constant('cst', {
        APP: {
            LOGIN: '/login/',
            DASHBOARD: '/dashboard/',
            HOME: '/'
        },
        REST: {
            LOGIN: '/rest-auth/login/'
        }
    });
