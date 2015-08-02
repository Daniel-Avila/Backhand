/**
 * Created by sparky on 7/29/15.
 */
angular.module('Backhand').controller('BHAccordionController', function ($scope) {
    $scope.oneAtATime = true;
    $scope.groups = [
        {
            title: 'User Preferences',
            items: [
                {
                    path: 'views/userprofile.html',
                    content: 'User Profile'
                }
            ]
        },
        {
            title: 'Account Preferences',
            items: [
                {
                    path: 'views/accountprofile.html',
                    content: 'Account Profile'
                },
                {
                    path: 'views/bannerpreferences.html',
                    content: 'Banner Preferences'
                },
                {
                    path: 'views/campaignpreferences.html',
                    content: 'Campaign Preferences'
                },
                {
                    path: 'views/reportpreferences.html',
                    content: 'Campaign email Report Preferences'
                },
                {
                    path: 'views/timezonepreferences.html',
                    content: 'Timezone Preferences'
                },
                {
                    path: 'views/uipreferences.html',
                    content: 'User Interface Preferences'
                }
            ]
        },
        {
            title: 'User Log',
            items: [{
                path: 'views/userlog.html',
                content: 'User History'
            }]
        },
        {
            title: 'Targeting Channel Managment',
            items: [{
                path: 'views/targetingmanagment.html',
                content: 'Channel Managment'
            }]
        }
    ];
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});