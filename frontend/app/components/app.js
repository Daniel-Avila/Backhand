'use strict';

// Declare app level module which depends on views, and components
angular.module('Backhand', [])
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
