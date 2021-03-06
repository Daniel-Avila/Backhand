/**
 *
 * Created by sparky on 7/27/15.
 */
'use strict';

describe('Controller: StatisticsController', function () {

    // load the controller's module
    beforeEach(module('Backhand'));

    var StatisticsController, scope, $state, $location;

    // Initialize the controller and a mock scope

    beforeEach(inject(function ($controller, $rootScope, _$state_, _$location_) {
        $state = _$state_;
        $location = _$location_;
        scope = $rootScope.$new();
        StatisticsController = $controller('StatisticsController', {
            $scope: scope
        });
    }));

    it('should exist', function () {
        expect(StatisticsController).toBeDefined();
    });
});
