'use strict';

angular.module('stApp', [
    'ngRoute',
    'ngCookies',
    'ngResource',
    'seo'/*,
    'ngSanitize'*/

]).config(function ($routeProvider) {

    $routeProvider/*.when('/', {

        templateUrl: 'views/login.html',
        controller: 'MainCtrl'

    })*/.when('/', {

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