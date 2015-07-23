/**
 * Created by sparky on 7/14/15.
 */
angular.module('HomeControllers', [])
    .controller('homeController', ['$scope', 'cst',
        function ($scope, cst) {
            $scope.dash_page = 'test variable value';
        }]
);
