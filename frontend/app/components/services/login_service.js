/**
 *
 * Created by sparky on 7/14/15.
 */
angular.module('authServices', ['ngResource'])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }])
    .factory('loginService', function ($rootScope, $http) {
        return {
            login: function () {
                $http.post('/api/v1/login/', {username: $rootScope.username, password: $rootScope.password})
                    .then(function (response) {
                        $rootScope.userid = response.data.userid;
                    });
            }
        };
    });


/**
 *  ['ngResource'])

 *  .service('loginService', function($resource) {
    *      function add_auth_header(data, headersGetter) {
    *          var headers = headersGetter();
    *          headers['Authorization'] = ('Basic ' + btoa(data.username + ':' + data.password));
    *      }
    *      return {
    *          auth: $resource('/v1/api/login\\/', {}, {
    *              login: {method: 'POST', transformRequest: add_auth_header},
    *              logout: {method: 'DELETE'}
    *          })
    *      };
    *  })
 */