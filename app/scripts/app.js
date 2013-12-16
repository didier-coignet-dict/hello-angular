'use strict';

angular.module('stApp', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'lib',
    'ngSanitize',
    'l10n',
    'l10n-fr-fr'
    ]).config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

        $routeProvider.when('/', {

            templateUrl: 'views/list.html',
            controller: 'ListCtrl'

        }).when('/list', {

            templateUrl: 'views/list.html',
            controller: 'ListCtrl'

        }).when('/detail/:id', {

            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'

        }).otherwise({

                redirectTo: '/'

        });
    });