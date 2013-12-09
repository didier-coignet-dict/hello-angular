'use strict';

angular.module('stApp').controller('MainCtrl', function ($scope, UserService) {

    $scope.user = 'ylombard@sqli.com';
    $scope.auth = false;


    $scope.login = function() {

        $scope.auth = UserService.login($scope.user, $scope.password);

        if($scope.auth) {

            $location.path('/list');

        }

    };

});