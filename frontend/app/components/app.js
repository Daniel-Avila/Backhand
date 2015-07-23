'use strict';

// Declare app level module which depends on views, and components
angular.module('Backhand', ['authServices', 'ui.router', 'AuthControllers',
    'DashboardControllers', 'HomeControllers', 'ui.bootstrap'])
    .config(['$stateProvider', '$urlRouterProvider', 'cst',
        function ($stateProvider, $urlRouterProvider, cst) {
            $urlRouterProvider.otherwise(cst.APP.HOME);
            $stateProvider
                .state('home', {
                    url: cst.APP.HOME,
                    templateUrl: cst.TEMPLATES.HOME
                })
                .state('login', {
                    url: cst.APP.LOGIN,
                    templateUrl: cst.TEMPLATES.LOGIN
                })
                .state('dashboard', {
                    url: cst.APP.DASHBOARD,
                    templateUrl: cst.TEMPLATES.DASHBOARD
                });
        }])
    .constant('cst', {
        APP: {
            LOGIN: '/login/',
            DASHBOARD: '/dashboard/',
            HOME: '/'
        },
        REST: {
            LOGIN: '/api/v1/auth/login/'
        },
        TEMPLATES: {
            HOME: 'templates/home.html',
            LOGIN: 'templates/login.html',
            DASHBOARD: 'templates/dashboard.html'
        },
        STATE: {
            HOME: 'home',
            LOGIN: 'login',
            DASHBOARD: 'dashboard'
        }
    });
