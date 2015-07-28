/**
 *
 * Created by sparky on 7/27/15.
 */
'use strict';

describe('Controller: PreferencesController', function () {

    // load the controller's module
    beforeEach(module('Backhand'));

    var PreferencesController, scope, $state, $location;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$state_, _$location_) {
        $state = _$state_;
        $location = _$location_;
        scope = $rootScope.$new();
        PreferencesController = $controller('PreferencesController', {
            $scope: scope
        });
    }));

    it('should exist', function () {
        expect(PreferencesController).toBeDefined();
    });

});
