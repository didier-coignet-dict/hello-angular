'use strict';

angular.module('stApp', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'lib',
    'ngSanitize',
    'l10n',
    'l10n-fr-fr',
    'l10n-en-us'
    ]).config(function ($routeProvider, $locationProvider, l10nProvider) {

        l10nProvider.setLocale('en-us');

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