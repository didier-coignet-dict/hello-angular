'use strict';

angular.module('stApp', [
  'ngCookies',
  'ngResource'/*,
  'ngSanitize'*/
])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'MainCtrl'
        })

        .when('/sextoys', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl'
        })

        .when('/sextoy/:id', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });
  });
