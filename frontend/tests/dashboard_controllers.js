/**
 *
 * Created by sparky on 7/21/15.
 */

describe('DashboardControllers', function () {
    'use strict';
    var $controller, $http, $httpBackend, cst;
    beforeEach(module('Backhand'));
    beforeEach(inject(function (_$controller_, _$http_, _$httpBackend_, _cst_) {
        $controller = _$controller_;
        $http = _$http_;
        $httpBackend = _$httpBackend_;
        cst = _cst_;
    }));
    it('should exist', function () {
        var $scope = [];
        var dashboardController = $controller('dashboardController', {$scope: $scope});
        expect(dashboardController).toBeDefined();
    });
});