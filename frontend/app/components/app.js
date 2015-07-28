'use strict';

// Declare app level module which depends on views, and components
angular.module('Backhand', ['angularDjangoRegistrationAuthApp'])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'views/dashboard.html',
                    controller: 'DashboardController',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }]
                    }
                })
                .state('preferences', {
                    url: '/preferences',
                    templateUrl: 'views/preferences.html',
                    controller: 'PreferencesController',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }]
                    }
                })
                .state('inventory', {
                    url: '/inventory',
                    templateUrl: 'views/inventory.html',
                    controller: 'InventoryController',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }]
                    }
                })
                .state('statistics', {
                    url: '/statistics',
                    templateUrl: 'views/statistics.html',
                    controller: 'StatisticsController',
                    resolve: {
                        authenticated: ['djangoAuth', function (djangoAuth) {
                            return djangoAuth.authenticationStatus();
                        }]
                    }
                });
        }]);
