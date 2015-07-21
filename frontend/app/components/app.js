'use strict';

// Declare app level module which depends on views, and components
angular.module('Backhand', ['authServices', 'ngRoute', 'BackhandControllers', 'ui.bootstrap'])
    .config(function ($routeProvider, cst) {
        $routeProvider
            .when(cst.APP.HOME, {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when(cst.APP.LOGIN, {
                templateUrl: 'templates/login.html',
                controller: 'loginController'
            })
            .when(cst.APP.DASHBOARD, {
                templateUrl: 'templates/dashboard.html',
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
            LOGIN: '/api/v1/auth/login/'
        }
    });
